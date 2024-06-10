/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global pageInfo, transitionTo, logHelpFlowResults, filterUpdateError:true,
  browser, savedData, translate, connectUIPort */

// Help flow button actions -- called when the associated buttons are clicked
/* eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars */
const popupMenuHelpActionMap = {
  // Checks if the page is whitelisted. If the page isn't whitelisted,
  // updates filter lists and checks for update errors
  // Disables button while updating the filter lists and reenables it
  // when updating is complete or after 6 seconds
  okCheckWhitelistAction() {
    if (pageInfo.whitelisted) {
      transitionTo('seeAdOnWhitelist', false);
    } else {
      transitionTo('seeAdNotOnWhitelist', false);
      $('button').prop('disabled', true);
      browser.runtime.sendMessage({ command: 'updateFilterLists' });
      setTimeout(() => {
        browser.runtime.sendMessage({ command: 'checkUpdateProgress' }).then((progress) => {
          if (progress.inProgress) {
            setTimeout(() => {
              browser.runtime.sendMessage({ command: 'checkUpdateProgress' }).then((progress2) => {
                if (progress2.inProgress || progress2.filterError) {
                  filterUpdateError = true;
                }
                $('button').prop('disabled', false);
              });
            }, 5000); // wait five seconds and check again
          } else {
            $('button').prop('disabled', false);
          }
          if (progress.filterError && !progress.inProgress) {
            filterUpdateError = true;
          }
        });
      }, 1000); // wait one second and check
    }
  },
  okCheckWhitelistDistractionsAction() {
    if (pageInfo.whitelisted) {
      transitionTo('seeDistractionOnWhitelist', false);
    } else {
      transitionTo('seeDistractionNotOnWhitelist', false);
      $('button').prop('disabled', true);
      browser.runtime.sendMessage({ command: 'updateFilterLists' });
      setTimeout(() => {
        browser.runtime.sendMessage({ command: 'checkUpdateProgress' }).then((progress) => {
          if (progress.inProgress) {
            setTimeout(() => {
              browser.runtime.sendMessage({ command: 'checkUpdateProgress' }).then((progress2) => {
                if (progress2.inProgress || progress2.filterError) {
                  filterUpdateError = true;
                }
                $('button').prop('disabled', false);
              });
            }, 5000); // wait five seconds and check again
          } else {
            $('button').prop('disabled', false);
          }
          if (progress.filterError && !progress.inProgress) {
            filterUpdateError = true;
          }
        });
      }, 1000); // wait one second and check
    }
  },
  dontRemoveWhitelistAction() {
    transitionTo('dontRemoveWhitelist', false);
  },
  removeWhitelistAction() {
    if (pageInfo.url) {
      browser.runtime.sendMessage({ command: 'tryToUnwhitelist', url: pageInfo.url.href, id: pageInfo.id });
    }
    transitionTo('removeWhitelist', false);
  },
  dontRemoveWhitelistDistractionAction() {
    transitionTo('dontRemoveWhitelistDistraction', false);
  },
  removeWhitelistDistractionAction() {
    if (pageInfo.url) {
      browser.runtime.sendMessage({ command: 'tryToUnwhitelist', url: pageInfo.url.href, id: pageInfo.id });
    }
    transitionTo('removeWhitelistDistraction', false);
  },
  finishFlowAction() {
    logHelpFlowResults('finishFlow');
    window.close();
  },
  reloadFinishFlowAction() {
    browser.tabs.reload();
    logHelpFlowResults('reloadFinishFlow');
    window.close();
  },
  reloadCheckAction() {
    browser.tabs.reload();
    transitionTo('checkedBasics', false);
  },
  reloadCheckDistractionAction() {
    browser.tabs.reload();
    transitionTo('checkedDistractionBasics', false);
  },
  stillSeeAdAction() {
    if (filterUpdateError) {
      transitionTo('seeAdFilterError', false);
    } else {
      transitionTo('seeAdFiltersGood', false);
    }
  },
  stillSeeDistractionAction() {
    if (filterUpdateError) {
      transitionTo('seeDistractionFilterError', false);
    } else if (pageInfo && pageInfo.subscriptions && pageInfo.subscriptions['distraction-control']) {
      transitionTo('requestDCSubmission', false);
    } else {
      savedData = {};
      savedData.subURL = 'https://easylist-downloads.adblockplus.org/adblock_premium.txt';
      transitionTo('enableDCFeature', false);
    }
  },
  problemSolvedAction() {
    transitionTo('problemSolved', false);
  },
  seeAdEnglishSiteAction() {
    transitionTo('seeAdEnglishSite', false);
  },
  seeAdNotEnglishSiteAction() {
    transitionTo('seeAdNotEnglishSite', false);
  },
  // Unpauses and reloads the page
  unpauseAndReloadAction() {
    if (pageInfo.paused) {
      browser.runtime.sendMessage({ command: 'adblockIsPaused', newValue: false }).then(() => {
        browser.tabs.reload();
        transitionTo('unpauseAndReload', false);
      });
    } else if (pageInfo.url) {
      browser.runtime.sendMessage({ command: 'adblockIsDomainPaused', activeTab: { url: pageInfo.url.href, id: pageInfo.id }, newValue: false }).then(() => {
        browser.tabs.reload();
        transitionTo('unpauseAndReload', false);
      });
    } else {
      browser.tabs.reload();
      transitionTo('unpauseAndReload', false);
    }
  },
  // Unpauses and reloads the page
  unpauseAndReloadActionDistraction() {
    if (pageInfo.paused) {
      browser.runtime.sendMessage({ command: 'adblockIsPaused', newValue: false }).then(() => {
        browser.tabs.reload();
        browser.runtime.sendMessage({ command: 'getCurrentTabInfo' }).then((info) => {
          // eslint-disable-next-line no-global-assign
          pageInfo = info;
          transitionTo('unpauseAndReloadDistraction', false);
        });
      });
    } else if (pageInfo.url) {
      browser.runtime.sendMessage({ command: 'adblockIsDomainPaused', activeTab: { url: pageInfo.url.href, id: pageInfo.id }, newValue: false }).then(() => {
        browser.tabs.reload();
        browser.runtime.sendMessage({ command: 'getCurrentTabInfo' }).then((info) => {
          // eslint-disable-next-line no-global-assign
          pageInfo = info;
          transitionTo('unpauseAndReloadDistraction', false);
        });
      });
    } else {
      browser.tabs.reload();
      browser.runtime.sendMessage({ command: 'getCurrentTabInfo' }).then((info) => {
        // eslint-disable-next-line no-global-assign
        pageInfo = info;
        transitionTo('unpauseAndReloadDistraction', false);
      });
    }
  },
  dontChangeSeeAdsAction() {
    transitionTo('dontChangeSeeAds', false);
  },
  dontChangeSeeDistractionAction() {
    transitionTo('dontChangeSeeDistraction', false);
  },
  seeAdsUnpausedAction() {
    transitionTo('seeAdFiltersGood', false);
  },
  // Pauses and reloads the page
  reloadStillBrokenAction() {
    browser.runtime.sendMessage({ command: 'adblockIsPaused', newValue: true }).then(() => {
      browser.tabs.reload();
      transitionTo('reloadStillBroken', false);
    });
  },
  stillBrokenNotAdBlockAction() {
    transitionTo('stillBrokenNotAdBlock', false);
  },
  stillBrokenAdBlockAction() {
    transitionTo('stillBrokenAdBlock', false);
  },
  reportRecievedAction() {
    const msg = {
      command: 'sendDCReport',
      url: pageInfo.url.origin + pageInfo.url.pathname,
      type: 'distraction',
      id: 'distraction-control',
    };
    browser.runtime.sendMessage(msg).then(() => {
      transitionTo('finishDCSubmission', false);
    });
  },
  distractionControlFeatureDisabled() {
    transitionTo('distractionControlFeatureDisabled', false);
  },
  requestDCSubmission() {
    transitionTo('requestDCSubmission', false);
  },
  showDCHelpPanel() {
    transitionTo('showDCHelpPanel', false);
  },
  subscribeToFilterList() {
    transitionTo('waitToRefreshPage', false);
    connectUIPort(({ addUIListener, postUIMessage, disconnectUI }) => {
      addUIListener((message) => {
        if (message && message.type === 'subscriptions.respond' && message.action) {
          setTimeout(() => { // wait at least 2 seconds for the user to see the button / icon change
            disconnectUI();
            $('#help_content button.button[disabled]').text(translate('reload_the_page')).attr('disabled', false);
          }, 2000);
        }
      });
      postUIMessage({
        type: 'subscriptions.listen',
        filter: ['added', 'changed'],
      });
    });
    browser.runtime.sendMessage({ type: 'subscriptions.add', url: savedData.subURL });
  },
  reloadcheckedDistractions() {
    browser.tabs.reload();
    transitionTo('checkedDistractions', false);
  },
  distractionsProblemSolvedAction() {
    transitionTo('seeingDistractionsProblemSolved', false);
  },
  whichDistractionsAction() {
    if (pageInfo && pageInfo.subscriptions && pageInfo.subscriptions['distraction-control']) {
      transitionTo('requestDCSubmission', false);
    } else {
      transitionTo('seeDistraction', false);
    }
  },
};
