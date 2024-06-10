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
/* global settings, SubscriptionAdapter,
   translate, updateAcceptableAdsUI,
   delayedSubscriptionSelection, startSubscriptionSelection, selected, activateTab, License,
   MABPayment, getStorageCookie, setStorageCookie, THIRTY_MINUTES_IN_MILLISECONDS,
   updateSocialIconsVisibility, initializeProxies, SubscriptionsProxy, send,
   connectUIPort, isDistractionControlURL
   */

function fixFilterList(item, adblockId) {
  if (item && item.url === 'https://fanboy.co.nz/fanboy-annoyance.txt') {
    // eslint-disable-next-line no-param-reassign
    item.adblockId = 'annoyances';
    return { item, adblockId: 'annoyances' };
  }
  return { item, adblockId };
}

function isAcceptableAds(filterList) {
  if (!filterList) {
    return undefined;
  }
  return filterList.adblockId === 'acceptable_ads';
}

function isAcceptableAdsPrivacy(filterList) {
  if (!filterList) {
    return undefined;
  }
  return filterList.adblockId === 'acceptable_ads_privacy';
}

// Contains all filter lists and their respective containers.
const filterListSections = {
  adblockFilterList: {
    array: [],
    $container: $('#ad_blocking_list'),
  },
  languageFilterList: {
    array: [],
    $container: $('#language_list'),
  },
  otherFilterList: {
    array: [],
    $container: $('#other_filter_lists'),
  },
  customFilterList: {
    array: [],
    $container: $('#custom_filter_lists'),
  },
};

function translateIDs(id) {
  const idsWith2 = ['warning_removal', 'annoyances', 'antisocial'];
  if (idsWith2.includes(id)) {
    const translatedMsg = translate(`filter_${id}2`).trim();
    if (translatedMsg !== '' && translatedMsg.length > 0) {
      return translatedMsg;
    }
    return translate(`filter${id}2`);
  }

  if (id.endsWith('_old')) {
    const trimmedID = id.split(/_old$/)[0];
    return translate(`filter${trimmedID}`);
  }
  const translatedMsg = translate(`filter_${id}`).trim();
  if (translatedMsg !== '' && translatedMsg.length > 0) {
    return translatedMsg;
  }
  return translate(`filter${id}`);
}

// Remove class that applies a border-bottom line to the last
// filter list element for each section
// Input:
//   section:string -- should be 'all' (apply to all 3 sections), 'other_filters'
//                     'ads_and_languages' or 'custom_filters'
const removeBottomLine = function (section) {
  const classToRemove = 'bottom-line';

  if (section === 'all' || section === 'ads_and_languages') {
    const $adBlockingFilters = $('#ad_blocking_list > div:visible').not('.no-bottom-line');
    const $languageFilters = $('#language_list > div:visible');
    const $sectionFilters = $adBlockingFilters.add($languageFilters);
    $sectionFilters.addClass(classToRemove).last().removeClass(classToRemove);
  }

  if (section === 'all' || section === 'other_filters') {
    const $otherFilters = $('#other_filter_lists > div:visible');
    $otherFilters.addClass(classToRemove).last().removeClass(classToRemove);
  }

  if (section === 'all' || section === 'custom_filters') {
    const $customFilters = $('#custom_filter_lists > div:visible');
    $customFilters.addClass(classToRemove).last().removeClass(classToRemove);
  }
};

// Utility class for filter lists.
function FilterListUtil() {
}

FilterListUtil.sortFilterListArrays = () => {
  // Sort alphabetically
  for (const filterList in filterListSections) {
    filterListSections[filterList].array.sort((a, b) => (a.label > b.label ? 1 : -1));
  }
  // Move AA privacy after AA
  const aaSection = filterListSections.adblockFilterList.array;
  const aaPrivacyIndex = aaSection.findIndex(list => isAcceptableAdsPrivacy(list));
  if (aaPrivacyIndex > -1) {
    const aaPrivacyFilter = aaSection.splice(aaPrivacyIndex, 1)[0];
    let aaIndex = aaSection.findIndex(filterList => isAcceptableAds(filterList));
    if (aaIndex > -1) {
      aaSection.splice(aaIndex += 1, 0, aaPrivacyFilter);
    }
  }
};

// Prepare filterListSections.
// Inputs:
//    subs:object - Map for subscription lists taken from the background.
FilterListUtil.getFilterListType = (filterList) => {
  let filterListType = '';
  if (
    filterList.adblockId === 'easylist'
    || filterList.adblockId === 'anticircumvent'
    || filterList.adblockId === 'acceptable_ads'
    || filterList.adblockId === 'acceptable_ads_privacy'
  ) {
    filterListType = 'adblockFilterList';
  } else if (
    filterList.adblockId === 'easyprivacy'
    || filterList.adblockId === 'antisocial'
    || filterList.adblockId === 'annoyances'
    || filterList.adblockId === 'bitcoin_mining_protection'
    || filterList.adblockId === 'warning_removal'
    || filterList.adblockId === 'idcac'
    || filterList.adblockId === 'fb_notifications'
  ) {
    filterListType = 'otherFilterList';
  } else if (filterList.language === true) {
    filterListType = 'languageFilterList';
  } else {
    filterListType = 'customFilterList';
  }
  return filterListType;
};

FilterListUtil.prepareSubscriptions = (subParameter) => {
  const subs = subParameter;
  for (const [adblockIdKey, entry] of Object.entries(subs)) {
    const { item } = fixFilterList(entry, adblockIdKey);
    // if it exists, treat the old FanBoy's Annoyances FL as if it is
    // the new FB Annoyances
    if (entry.url === 'https://fanboy.co.nz/fanboy-annoyance.txt') {
      delete subs.annoyances;
      delete subs['url:https://fanboy.co.nz/fanboy-annoyance.txt'];
      subs.annoyances = item;
    }
  }
  FilterListUtil.cachedSubscriptions = subs;
  for (const [adblockIdKey, entry] of Object.entries(subs)) {
    if (adblockIdKey) {
      if (entry && !isDistractionControlURL(entry.url)) {
        entry.label = translateIDs(adblockIdKey);
        entry.adblockId = adblockIdKey;
        const filterListType = FilterListUtil.getFilterListType(entry);
        filterListSections[filterListType].array.push(entry);
      }
    }
  }

  FilterListUtil.sortFilterListArrays();
};

// Returns the subscription info object for the custom filter list specified by |url|,
// or undefined if that custom filter list does not exist.
// Inputs:
//   url:string - Url for uploaded custom filter list.
FilterListUtil.checkUrlForExistingFilterList = (url) => {
  const { cachedSubscriptions } = FilterListUtil;
  for (const adblockId in cachedSubscriptions) {
    if (url === cachedSubscriptions[adblockId].url) {
      return cachedSubscriptions[adblockId];
    }
  }
  return undefined;
};

// Updates info text for each filter list.
FilterListUtil.updateSubscriptionInfoAll = () => {
  const { cachedSubscriptions } = FilterListUtil;
  for (const adblockId in cachedSubscriptions) {
    FilterListUtil.updateSubscriptionInfoForId(adblockId);
  }
};

// Updates info text for a specific filter list.
FilterListUtil.updateSubscriptionInfoForId = (adblockId) => {
  let $div = $(`[name='${adblockId}']`);
  const subscription = FilterListUtil.cachedSubscriptions[adblockId];
  if (subscription.subscribed === false) {
    return;
  }
  if (isAcceptableAdsPrivacy(subscription)) {
    $div = $('[name=acceptable_ads]');
  }
  const $infoLabel = $('.subscription_info', $div);
  const $timestampLabel = $('.timestamp_info', $div);
  let text = $infoLabel.text();
  let timestamp = '';
  const lastUpdate = subscription.lastDownload || subscription._lastDownload;
  // If filter list is invalid, skip it.
  if ($infoLabel.text() === translate('invalidListUrl')) {
    return;
  }
  if (subscription.downloadStatus && subscription.downloadStatus !== 'synchronize_ok') {
    const map = {
      synchronize_invalid_url: translate('ab_filters_subscription_lastDownload_invalidURL'),
      synchronize_connection_error: translate('ab_filters_subscription_lastDownload_connectionError'),
      synchronize_invalid_data: translate('ab_filters_subscription_lastDownload_invalidData'),
      synchronize_checksum_mismatch: translate('ab_filters_subscription_lastDownload_checksumMismatch'),
    };
    if (subscription.downloadStatus in map) {
      text = map[subscription.downloadStatus];
    } else {
      text = subscription.downloadStatus;
    }
  } else if (lastUpdate > 0) {
    timestamp = translate('updatedtimestamp', [new Date(lastUpdate * 1000).toLocaleString()]);
    const howLongAgo = Date.now() - (lastUpdate * 1000);
    const seconds = Math.round(howLongAgo / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    if (seconds < 10) {
      text = translate('updatedrightnow');
    } else if (seconds < 60) {
      text = translate('updatedsecondsago', [seconds]);
    } else if (minutes === 1) {
      text = translate('updatedminuteago');
    } else if (minutes < 60) {
      text = translate('updatedminutesago', [minutes]);
    } else if (hours === 1) {
      text = translate('updatedhourago');
    } else if (hours < 24) {
      text = translate('updatedhoursago', [hours]);
    } else if (days === 1) {
      text = translate('updateddayago');
    } else {
      text = translate('updateddaysago', [days]);
    }
  }

  $infoLabel.text(text);
  $timestampLabel.text(timestamp);
};

// Update checkbox for the filter list according to it's current state.
// Inputs:
//    filterList:object - Filter list that owns the check box to be updated.
//    adblockId:String - adblockId of the filter list to be updated and the
//                       name of the containing div in display.
FilterListUtil.updateCheckbox = (filterList, adblockId) => {
  const $containingDiv = $(`div[name='${adblockId}']`);
  const $checkbox = $($containingDiv).find('input');
  const $filterLink = $($containingDiv).find('a.filter-list-link');
  const aaPrivacy = FilterListUtil.cachedSubscriptions.acceptable_ads_privacy;
  const isAcceptableAdsVal = isAcceptableAds(filterList);

  // Keep AA checkbox selected when AA Privacy is subscribed
  // and assign the AA Privacy filter URL to the AA link icon
  if (isAcceptableAdsVal && aaPrivacy.subscribed) {
    $checkbox.prop('checked', true);
    $filterLink.attr('href', aaPrivacy.url);
    return;
  }

  // Re-assign the AA filter URL to the AA link icon if AA Privacy unsubscribed
  if (isAcceptableAdsVal) {
    $filterLink.attr('href', filterList.url);
  }

  // Check if subscribed and checkbox staus is equal, if not, update checkbox status
  // according to subscribed status.
  if ($checkbox.is(':checked') !== filterList.subscribed) {
    $checkbox.prop('checked', filterList.subscribed ? true : null);

    // Force update current info label since status is already updated in the background.
    $('.subscription_info', $containingDiv)
      .text(filterList.subscribed ? translate('fetchinglabel') : translate('unsubscribedlabel'));
  }
};

// Utility class for Subscriptions.
function SubscriptionUtil() {
}

// Returns true if the user knows what they are doing, subscribing to many
// filter lists.
SubscriptionUtil.validateOverSubscription = (clicked) => {
  const totalSelected = $('.subscription :checked').length;
  const aaSelected = $('[name=acceptable_ads] :checked').length;
  const aaPrivacyClicked = isAcceptableAdsPrivacy(clicked);

  if (totalSelected <= 6) {
    return true;
  }

  // No need to show the dialog window because we change from AA to
  // AA Privacy without altering the total number of subscriptions
  if (aaSelected && aaPrivacyClicked) {
    return true;
  }

  if (settings && settings.show_advanced_options) {
    // In case of an advanced user, only warn once every 30 minutes, even
    // if the options page wasn't open all the time. 30 minutes = 1/48 day
    if (getStorageCookie('noOversubscriptionWarning')) {
      return true;
    }
    setStorageCookie('noOversubscriptionWarning', 'true', THIRTY_MINUTES_IN_MILLISECONDS);
  }

  // eslint-disable-next-line no-alert
  return window.confirm(translate('you_know_thats_a_bad_idea_right'));
};

// Returns true if the user knows what they are doing, unsubscribing from
// all filter lists.
SubscriptionUtil.validateUnderSubscription = (clicked) => {
  const totalSelected = $('.subscription :checked').length;
  const aaClicked = isAcceptableAds(clicked);
  const aaPrivacySelected = $('[name=acceptable_ads_privacy] :checked').length;

  // If the user unsubscribe to AA while the only other selection is AA Privacy
  // we want to show the dialog window because we're going to force the
  // unsubscription of AA Privacy and the totalSelection will actually be 0
  const aaPrivacyIsLast = totalSelected === 1 && aaClicked && aaPrivacySelected;

  if (totalSelected >= 1 && !(aaPrivacyIsLast)) {
    return true;
  }

  if (settings && settings.show_advanced_options) {
    // In case of an advanced user, only warn once every 30 minutes, even
    // if the options page wasn't open all the time. 30 minutes = 1/48 day
    if (getStorageCookie('noUnderSubscriptionWarning')) {
      return true;
    }
    setStorageCookie('noUnderSubscriptionWarning', 'true', THIRTY_MINUTES_IN_MILLISECONDS);
  }

  // eslint-disable-next-line no-alert
  return window.confirm(translate('unsubscribe_from_all_confirmation'));
};

// Subscribe to the filter list with the given |id|.
// Input:
//   adblockId:string - adblockId of the filter list to be subscribed to.
SubscriptionUtil.subscribe = async (adblockId, title) => {
  SubscriptionUtil.updateCacheValue(adblockId);
  const cachedSubscription = FilterListUtil.cachedSubscriptions[adblockId];
  let subscription;
  if (cachedSubscription) {
    subscription = cachedSubscription;
  } else if (/^url:.*/.test(adblockId)) { // Working with an unknown list: create the list entry
    const newSub = {
      userSubmitted: true,
      initialUrl: adblockId.substr(4),
      url: adblockId.substr(4),
      correctedURL: adblockId.substr(4),
      title,
    };
    FilterListUtil.cachedSubscriptions[adblockId] = newSub;
    subscription = newSub;
  }
  await SubscriptionsProxy.add(subscription.correctedURL);
  await SubscriptionsProxy.sync(subscription.correctedURL);

  if (isAcceptableAds(cachedSubscription)) {
    updateAcceptableAdsUI(true, false);
  }

  if (isAcceptableAdsPrivacy(cachedSubscription)) {
    const aa = FilterListUtil.cachedSubscriptions.acceptable_ads;
    setTimeout(async () => {
      if (await SubscriptionsProxy.has(aa.correctedURL)) {
        SubscriptionsProxy.remove(aa.correctedURL);
      }
    }, 1);
    updateAcceptableAdsUI(true, true);
  }

  if (adblockId === 'easylist') {
    $('#easylist_info').slideUp();
  }
};

// Unsubscribe to the filter list with the given |id|.
// Input:
//   adblockId:string - adblockId of the filter list to unsubscribe
//   del:boolean - Flag to indicate if filter list should be deleted in the background.
SubscriptionUtil.unsubscribe = (adblockId) => {
  SubscriptionUtil.updateCacheValue(adblockId);
  const cachedSubscription = FilterListUtil.cachedSubscriptions[adblockId];
  setTimeout(async () => {
    if (await SubscriptionsProxy.has(cachedSubscription.correctedURL)) {
      SubscriptionsProxy.remove(cachedSubscription.correctedURL);
    }
  }, 1);

  if (isAcceptableAds(cachedSubscription)) {
    const aaPrivacy = FilterListUtil.cachedSubscriptions.acceptable_ads_privacy;
    setTimeout(async () => {
      if (await SubscriptionsProxy.has(aaPrivacy.correctedURL)) {
        SubscriptionsProxy.remove(aaPrivacy.correctedURL);
      }
    }, 1);
    updateAcceptableAdsUI(false, false);
  }

  if (isAcceptableAdsPrivacy(cachedSubscription)) {
    SubscriptionUtil.subscribe('acceptable_ads');
    FilterListUtil.cachedSubscriptions.acceptable_ads.subscribed = true;
    updateAcceptableAdsUI(true, false);
  }

  if (adblockId === 'easylist') {
    $('#easylist_info').slideDown();
  }
};

// Update the given filter list in the cached list.
// Input:
//   adblockId:string - adblockId of the filter list to be updated.
SubscriptionUtil.updateCacheValue = (adblockId) => {
  const sub = FilterListUtil.cachedSubscriptions[adblockId];
  if (sub) {
    const properties = ['downloadStatus', 'label', 'lastDownload', '_downloadStatus'];
    for (let i = 0; i < properties.length; i++) {
      if (sub[properties[i]]) {
        delete sub[properties[i]];
      }
    }
  }
};

function getDefaultFilterUI(filterList, checkboxID, filterListType) {
  const isAcceptableAdsVal = isAcceptableAds(filterList);
  const isLanguageFilter = filterListType === 'languageFilterList';
  const aaPrivacy = FilterListUtil.cachedSubscriptions.acceptable_ads_privacy;
  let isSelected = filterList.subscribed;
  let filterListUrl = filterList.url;

  if (isAcceptableAdsVal && aaPrivacy.subscribed) {
    isSelected = true;
    filterListUrl = aaPrivacy.url;
  }

  const $filterListIcon = $('<i>')
    .addClass('material-icons')
    .addClass('md-24')
    .attr('role', 'img')
    .attr('aria-label', translate('filterviewsource'))
    .text('format_list_bulleted');

  const $checkBox = $('<input>')
    .attr('type', 'checkbox')
    .attr('adblockId', checkboxID)
    .attr('id', checkboxID)
    .prop('checked', isSelected);

  const $checkBoxIcons = $(`
    <i role="img" aria-hidden="true" class="unchecked material-icons">lens</i>
    <i role="img" aria-hidden="true" class="checked material-icons circle-icon-bg-24 checkbox-icon">check_circle</i>'`);

  const $checkBoxWrapper = $('<span>')
    .addClass('checkbox')
    .addClass('md-stack')
    .append($checkBox)
    .append($checkBoxIcons);

  const $filterTitle = $('<h1>')
    .text(filterList.label || filterList.title || filterList._title || `${filterList.url.substr(0, 40)}...`);

  const $link = $('<a>')
    .addClass('filter-list-link')
    .css('display', $('#btnShowLinks').prop('disabled') ? 'inline' : 'none')
    .attr('target', '_blank')
    .attr('href', filterListUrl)
    .append($filterListIcon);

  const $filterHeader = $('<div>')
    .append($filterTitle)
    .append($link);

  const $infoSpan = $('<span>')
    .addClass('subscription_info')
    .attr('aria-hidden', true)
    .text(filterList.subscribed && !filterList._lastDownload ? translate('fetchinglabel') : '');

  const $timestampSpan = $('<span>')
    .addClass('timestamp_info')
    .text(filterList.subscribed && !filterList._lastDownload ? translate('fetchinglabel') : '');

  const $infoSection = $('<div>')
    .append($infoSpan)
    .append($timestampSpan);

  const $extraInformation = $('<div>')
    .addClass('extra-info')
    .addClass('italic')
    .text(translate(`filter_${filterList.adblockId}_explained`));

  const $filterInfo = $('<div>')
    .append($filterHeader)
    .append($extraInformation);

  const $label = $('<label>')
    .attr('title', filterList.correctedURL)
    .attr('for', checkboxID)
    .append($filterInfo)
    .append($infoSection);

  const $removeFilterListLabel = filterList.userSubmitted ? $('<a>')
    .addClass('remove_filterList')
    .css('font-size', '10px')
    .css('display', filterList.subscribed ? 'none' : 'inline')
    .attr('href', '#')
    .text(translate('removefromlist'))
    .on('click', function removeThisFilterList(event) {
      event.preventDefault();
      const $subscription = $(this).closest('.subscription');
      const $subscriptionWrapper = $subscription.closest('.filter-subscription-wrapper');
      const subscriptionId = $subscription.attr('name');
      SubscriptionUtil.unsubscribe(subscriptionId, filterList, true);
      $subscriptionWrapper.remove();
      removeBottomLine('custom_filters');
    }) : null;

  const $checkboxHeaderLine = $('<div>')
    .addClass('subscription')
    .addClass(filterListType)
    .addClass('add-space-between')
    .addClass(isAcceptableAds ? 'section-padding' : '')
    .addClass(isAcceptableAds ? 'bottom-line' : '')
    .attr('name', filterList.adblockId)
    .append($checkBoxWrapper)
    .append($label)
    .append($removeFilterListLabel);

  const $filterWrapper = $('<div>')
    .addClass('filter-subscription-wrapper')
    .addClass(isAcceptableAds ? '' : 'section-padding')
    .addClass(isAcceptableAds ? 'no-bottom-line' : 'bottom-line')
    .css('display', isLanguageFilter && !filterList.subscribed ? 'none' : 'block')
    .append($checkboxHeaderLine);

  return {
    checkbox: $checkBox,
    filter: $filterWrapper,
  };
}

function getToggleFilterUI(filterList, checkboxID) {
  const $checkBox = $('<input>')
    .attr('type', 'checkbox')
    .attr('adblockId', checkboxID)
    .attr('id', checkboxID)
    .prop('checked', !!filterList.subscribed);

  const $spanSlider = $('<span>')
    .addClass('slider')
    .addClass('round');

  const $spanText = $('<span>')
    .text(translate('acceptable_ads_privacy'));

  const $label = $('<label>')
    .addClass('switch')
    .attr('title', filterList.correctedURL)
    .attr('for', checkboxID)
    .append($checkBox)
    .append($spanSlider)
    .append($spanText);

  const $toggleItem = $('<div>')
    .addClass('filter-toggle-indentation')
    .addClass('section-padding')
    .addClass('subscription')
    .addClass('bottom-line')
    .attr('name', filterList.adblockId)
    .append($label);

  return {
    checkbox: $checkBox,
    filter: $toggleItem,
  };
}

// Represents the checkbox controlling subscription to a specific filter list,
// as well as the UI that goes along with it (e.g. status label and removal link.)
// Inputs:
//   filterList:object - An entry from a filterListSections array.
//   filterListType:string - A key from filterListSections describing the section
//       where this checkbox will appear, e.g. 'languageFilterList'.
//   index:int - The position in the section where this checkbox should appear.
//   container:jQuery - The DOM element for the section in which this checkbox
//       should appear.
function CheckboxForFilterList(filterList, filterListType, index, container) {
  this.filterListUI = undefined;
  this.container = container;
  this.filterList = filterList;
  const adblockId = `${filterListType}_${index}`;
  let uiItems = {};

  if (isAcceptableAdsPrivacy(this.filterList)) {
    uiItems = getToggleFilterUI(this.filterList, adblockId);
  } else {
    uiItems = getDefaultFilterUI(this.filterList, adblockId, filterListType);
  }

  this.filterListUI = uiItems.filter;
  this.checkBox = uiItems.checkbox;
}

// Utility class for the language select.
function LanguageSelectUtil() {
}

// Represents the option for language filter lists inside the language select.
// Inputs:
//   filterList:object - An entry from a filterListSections array.
//   index:int - The position in the language select where this option should appear.
function OptionForFilterList(filterList, index) {
  this.optionTag = $('<option>', {
    value: filterList.adblockId,
    text: filterList.label || filterList.title,
    hidden: filterList.hidden,
  }).data('index', index);
}

OptionForFilterList.prototype = {
  // Returns the optionTag attribute.
  get() {
    return this.optionTag;
  },
};

CheckboxForFilterList.prototype = {
  // Bind checkbox on change event to handle subscribing and unsubscribing to
  // different filter lists.

  bindActions() {
    const that = this;
    this.checkBox.on('change', function filterListSelectionChanged(event) {
      const $subscription = $(this).closest('.subscription');
      const $subscriptionWrapper = $subscription.closest('.filter-subscription-wrapper');
      const checked = $(this).is(':checked');
      const adblockId = $subscription.attr('name');
      if (checked) {
        if (
          !event.addedViaBackground
          && !SubscriptionUtil.validateOverSubscription(that.filterList)
        ) {
          $(this).prop('checked', false);
          return;
        }
        if (isAcceptableAdsPrivacy(that.filterList)) {
          $('.subscription_info', '[name=acceptable_ads]').text(translate('fetchinglabel'));
        } else {
          $('.subscription_info', $subscription).text(translate('fetchinglabel'));
        }
        SubscriptionUtil.subscribe(adblockId);
        FilterListUtil.cachedSubscriptions[adblockId].subscribed = true;
      } else {
        if (!SubscriptionUtil.validateUnderSubscription(that.filterList)) {
          $(this).prop('checked', true);
          return;
        }
        SubscriptionUtil.unsubscribe(adblockId, false);
        $('.subscription_info', $subscription).text(translate('unsubscribedlabel'));
        FilterListUtil.cachedSubscriptions[adblockId].subscribed = false;
        FilterListUtil.cachedSubscriptions[adblockId].lastDownload = -1;
        FilterListUtil.cachedSubscriptions[adblockId]._lastDownload = -1;
      }
      $('.remove_filterList', $subscription).css('display', checked ? 'none' : 'inline');

      if ($subscription.attr('class').indexOf('languageFilterList') > -1) {
        $subscriptionWrapper.toggle({
          duration: 500,
          start() {
            $(this).closest('.filter-subscription-wrapper').removeClass('bottom-line');
          },
          complete() {
            removeBottomLine('ads_and_languages');
          },
        });
        if (!checked) {
          const $this = $(this);
          const index = $this.attr('adblockId').split('_')[1];
          const entry = filterListSections.languageFilterList.array[index];
          if (!Object.prototype.hasOwnProperty.call(entry, 'label')) {
            entry.label = translateIDs(adblockId);
          }

          const option = new OptionForFilterList(entry, index);
          LanguageSelectUtil.insertOption(option.get(), index);
        }
      }
    });
  },

  // Create the actual check box div and append in the container.
  // Inputs:
  //   isChecked:boolean - Flag that will indicate that this checkbox is checked by default.
  createCheckbox(isChecked) {
    this.container.append(this.filterListUI);
    this.bindActions();

    if (isChecked) {
      this.checkBox.prop('checked', true);
      this.checkBox.trigger('change');
    }
  },
};

// This class is in charge of creating the display per filter list type.
// Inputs:
//   filterListSection:object - One of the objects in filterListSections.
//   filterListType:string - Will serve as the identifier for the corresponding filter list,
//      use the keys in filterListSections as its value.
function SectionHandler(filterListSection, filterListType) {
  this.cachedSubscriptions = filterListSection.array;
  this.$section = filterListSection.$container;
  this.filterListType = filterListType;
}

SectionHandler.prototype = {
  // Organize each container for checkboxes.
  organize() {
    for (let i = 0; i < this.cachedSubscriptions.length; i++) {
      const filterList = this.cachedSubscriptions[i];
      const checkbox = new CheckboxForFilterList(filterList, this.filterListType, i, this.$section);
      checkbox.createCheckbox();
    }
  },

  // Initialization call. Calls organize to start displaying things.
  initSection() {
    this.organize();
  },
};

// Insert option at specified index in the language select.
// Inputs:
//   option:OptionForFilterList - Option to be inserted.
//   index:int - Where to insert the option.
LanguageSelectUtil.insertOption = (option, index) => {
  const $languageSelect = $('#language_select');
  const options = $languageSelect.find('option');
  let i;
  for (i = 0; i < options.length; i++) {
    const listOptionIndex = options.eq(i).data('index');
    if (listOptionIndex && parseInt(listOptionIndex, 10) > parseInt(index, 10)) {
      break;
    }
  }

  if (options.eq(i).length > 0) {
    options.eq(i).before(option);
  } else {
    $languageSelect.append(option);
  }
};

// Puts all unsubscribed language filter lists into the language select,
// and binds an onChange event on the select to subscribe to the selected
// filter list.
LanguageSelectUtil.init = () => {
  const languageFilterListArr = filterListSections.languageFilterList.array;
  for (let i = 0; i < languageFilterListArr.length; i++) {
    const languageFilterList = languageFilterListArr[i];
    if (!languageFilterList.subscribed) {
      const option = new OptionForFilterList(languageFilterList, i);
      LanguageSelectUtil.insertOption(option.get(), i);
    }
  }

  $('#language_select').on('change', function aLanguageSelectionChanged(event) {
    const $this = $(this);
    const selectedOption = $this.find(':selected');
    const index = $(selectedOption).data('index');
    const entry = languageFilterListArr[index];
    if (entry) {
      $this.find('option:first').prop('selected', true);
      selectedOption.remove();
      const $checkbox = $(`[name='${entry.adblockId}']`).find('input');
      $checkbox.prop('checked', true);
      const newChangeEvent = jQuery.Event('change');
      newChangeEvent.addedViaBackground = event.addedViaBackground;
      $checkbox.trigger(newChangeEvent);
    }
  });
};

// Trigger change event to language select using one of the entries.
// Input:
//   filterList:object - Filter list to select.
LanguageSelectUtil.triggerChange = (filterList) => {
  const $languageSelect = $('#language_select');
  $languageSelect.val(filterList.adblockId);
  $languageSelect.trigger('change');
};

// Utility class for custom filter list upload box.
function CustomFilterListUploadUtil() {
}

// Perform the subscribing part and creating checkbox for custom filter lists.
// Inputs:
//   url:string - Url for the custom filter list.
//   subscribeTo:string - The adblockId of the custom filter list.
CustomFilterListUploadUtil.performUpload = (url, subscribeTo, title) => {
  const entry = {
    adblockId: subscribeTo,
    url,
    correctedURL: url,
    subscribed: false,
    userSubmitted: true,
    label: '',
    title,
  };
  FilterListUtil.cachedSubscriptions[entry.adblockId] = entry;
  const customFilterLists = filterListSections.customFilterList;
  customFilterLists.array.push(entry);
  const checkbox = new CheckboxForFilterList(
    entry,
    'customFilterList',
    customFilterLists.array.length,
    customFilterLists.$container,
  );
  checkbox.createCheckbox(true);
  removeBottomLine('custom_filters');
};

// When a user enters a URL in the custom filter list textbox for a known filter list,
// this method clicks the correct filter list checkbox/select option for him instead.
// Input:
//   existingFilterList:object - Filter list whose URL was entered by the user.
CustomFilterListUploadUtil.updateExistingFilterList = (existingFilterList) => {
  let $containingDiv = $(`div[name='${existingFilterList.adblockId}']`);
  if ($containingDiv.length < 1) {
    // If the checkbox does not exist but there is an existing filter list,
    // then recreate the checkbox
    const filterListType = FilterListUtil.getFilterListType(existingFilterList);
    const filterListArray = filterListSections[filterListType].array;
    let index = filterListArray.indexOf(existingFilterList);
    if (index < 0) {
      index = filterListArray.length;
      filterListArray.push(existingFilterList);
    }
    const checkboxForFilterList = new CheckboxForFilterList(
      existingFilterList,
      filterListType,
      index,
      filterListSections[filterListType].$container,
    );
    checkboxForFilterList.createCheckbox();
    $containingDiv = $(`div[name='${existingFilterList.adblockId}']`);
  }

  const checkbox = $($containingDiv).find('input');
  if (!checkbox.is(':checked')) {
    if (checkbox.attr('adblockId').indexOf('languageFilterList') >= 0) {
      LanguageSelectUtil.triggerChange(existingFilterList);
    } else {
      checkbox.prop('checked', true);
      checkbox.trigger('change');
    }
  }
  removeBottomLine('custom_filters');
};

// Binds events for key press 'enter' and click for upload box.
CustomFilterListUploadUtil.bindControls = () => {
  $('#btnNewSubscriptionUrl').on('click', () => {
    let url = $('#txtNewSubscriptionUrl').val();
    const abpRegex = /^abp.*\Wlocation=([^&]+)/i;
    if (abpRegex.test(url)) {
      [, url] = url.match(abpRegex); // The part after 'location='.
      url = unescape(url);
    }

    url = url.trim();
    const subscribeTo = `url:${url}`;

    const existingFilterList = FilterListUtil.checkUrlForExistingFilterList(url);
    if (existingFilterList) {
      if (isDistractionControlURL(url)) {
        return;
      }
      CustomFilterListUploadUtil.updateExistingFilterList(existingFilterList);
    } else if (/^https?:\/\/[^<]+$/.test(url)) {
      CustomFilterListUploadUtil.performUpload(url, subscribeTo);
    } else {
      // eslint-disable-next-line no-alert
      alert(translate('failedtofetchfilter'));
    }
    $('#txtNewSubscriptionUrl').val('');
  });

  // Pressing enter will add the list too.
  $('#txtNewSubscriptionUrl').on('keypress', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      $('#btnNewSubscriptionUrl').trigger('click');
    }
  });
};

async function onFilterChangeHandler(action, items) {
  let item = items;
  if (Array.isArray(items)) {
    [item] = items;
  }
  if (item && isDistractionControlURL(item.url)) {
    return;
  }
  // A user can either add, remove or update a filter list from the UI.
  // Each 'subscription.added' action leads to a 'subscription.updated' so we
  // can show the CTAs simply when a subscription is either removed or updated
  if (['subscription.removed', 'subscription.updated'].includes(action)) {
    MABPayment.displaySyncCTAs(true);
  }

  const updateEntry = async function (entryToUpdate, eventAction) {
    const entry = entryToUpdate;
    if (entry) {
      // copy / update relevant properties to the cached entry
      const properties = ['downloadStatus', 'label', 'lastDownload', '_downloadStatus', 'language'];
      for (let i = 0; i < properties.length; i++) {
        if (entry[properties[i]]) {
          FilterListUtil.cachedSubscriptions[entry.adblockId][properties[i]] = entry[properties[i]];
        }
      }
      entry.language = await SubscriptionAdapter.isLanguageSpecific(entry.adblockId);
      if (eventAction && eventAction === 'subscription.added') {
        FilterListUtil.cachedSubscriptions[entry.adblockId].subscribed = true;
        if (entry.language && $(`#language_select option[value='${entry.adblockId}']`).length === 1) {
          const changeEvent = jQuery.Event('change');
          changeEvent.addedViaBackground = true;
          $(`#language_select option[value='${entry.adblockId}']`).prop('selected', true).trigger(changeEvent);
        }
        if (isAcceptableAdsPrivacy(entryToUpdate)) {
          $(`label[title="${SubscriptionsProxy.ACCEPTABLE_ADS_URL}"]`).prev().find('input').prop('checked', true);
        }
      }
      if (eventAction && eventAction === 'subscription.removed') {
        FilterListUtil.cachedSubscriptions[entry.adblockId].subscribed = false;
        if (entry.language && $(`#language_select option[value='${entry.adblockId}']`).length === 0) {
          $(`div[name='${entry.adblockId}']`).find('input').trigger('click');
        }
        if (isAcceptableAdsPrivacy(entryToUpdate)) {
          $(`label[title="${SubscriptionsProxy.ACCEPTABLE_ADS_URL}"]`).prev().find('input').prop('checked', false);
        }
      }

      // Update checkbox according to the value of the subscribed field
      FilterListUtil.updateCheckbox(
        FilterListUtil.cachedSubscriptions[entry.adblockId], entry.adblockId,
      );

      // If sub is subscribed, update lastUpdate_failed_at or lastUpdate field
      if (FilterListUtil.cachedSubscriptions[entry.adblockId].subscribed) {
        FilterListUtil.updateSubscriptionInfoForId(entry.adblockId);
      }
    }
  };

  // If we get an entry, update it
  if (item && item.url) {
    const updateItem = function (itemToUpdate, adblockId) {
      const itemToUpdateWithId = itemToUpdate;
      itemToUpdateWithId.adblockId = adblockId;
      updateEntry(itemToUpdateWithId, action);
    };

    let adblockId = await SubscriptionAdapter.getIdFromURL(item.url);
    const { param1, param2 } = window;
    ({ item, adblockId } = fixFilterList(item, adblockId));

    if (adblockId) {
      updateItem(item, adblockId);
      return;
    }
    if (FilterListUtil.cachedSubscriptions[`url:${item.url}`]) {
      // or user subscribed filter list
      updateItem(item, `url:${item.url}`);
      return;
    }
    if (
      action === 'subscription.added'
      && !FilterListUtil.cachedSubscriptions['url:']
      && !item.url.startsWith('~user~')
    ) {
      CustomFilterListUploadUtil.performUpload(item.url, `url:${item.url}`, item.title);
      return;
    }
    if (action === 'subscription.title' && param1) {
      // or if the URL changed due to a redirect, we may not be able to determine
      // the correct adblockId, but should be able to using one of the params
      adblockId = await SubscriptionAdapter.getIdFromURL(param1);
      if (adblockId) {
        updateItem(item, adblockId);
        return;
      }
      adblockId = await SubscriptionAdapter.getIdFromURL(param2);
      if (adblockId) {
        updateItem(item, adblockId);
        return;
      }
    }
  }

  // If we didn't get an entry or adblockId, loop through all of the subscriptions.
  const subs = await SubscriptionAdapter.getAllSubscriptionsMinusText();
  const { cachedSubscriptions } = FilterListUtil;
  for (const adblockId in cachedSubscriptions) {
    const entry = subs[adblockId];
    updateEntry(entry);
  }
}

$(async () => {
  // Retrieves list of filter lists from the background.
  const subs = await SubscriptionAdapter.getAllSubscriptionsMinusText();
  // Initialize page using subscriptions from the background.
  // Copy from update subscription list + setsubscriptionlist
  FilterListUtil.prepareSubscriptions(subs);

  for (const adblockId in filterListSections) {
    const sectionHandler = new SectionHandler(filterListSections[adblockId], adblockId);
    sectionHandler.initSection();
  }

  LanguageSelectUtil.init();
  CustomFilterListUploadUtil.bindControls();

  const onSubAdded = function (item) {
    updateSocialIconsVisibility();
    onFilterChangeHandler('subscription.added', item);
  };
  SubscriptionsProxy.onAdded.addListener(onSubAdded);

  const onSubRemoved = function (item) {
    updateSocialIconsVisibility();
    onFilterChangeHandler('subscription.removed', item);
  };
  SubscriptionsProxy.onRemoved.addListener(onSubRemoved);

  const onSubUpdated = function (item) {
    onFilterChangeHandler('subscription.updated', item);
  };
  SubscriptionsProxy.onChanged.addListener(onSubUpdated);

  connectUIPort(({ addUIListener, postUIMessage }) => {
    addUIListener((message) => {
      if (message.type === 'subscriptions.respond' && message.args && message.args.length) {
        if (message.action === 'added') {
          onFilterChangeHandler('subscription.added', message.args[0]);
        } else if (message.action === 'removed') {
          onFilterChangeHandler('subscription.removed', message.args[0]);
        }
      }
    });
    postUIMessage({
      type: 'subscriptions.listen',
      filter: ['added', 'removed'],
    });
  });

  FilterListUtil.updateSubscriptionInfoAll();

  window.setInterval(() => {
    FilterListUtil.updateSubscriptionInfoAll();
  }, 10000);

  $('#btnUpdateNow').on('click', function updateFilterListsNow() {
    $(this).prop('disabled', true);
    send('updateFilterLists');
    setTimeout(() => {
      $('#btnUpdateNow').prop('disabled', false);
    }, 300000); // Re-enable update button after 5 minutes.
  });

  selected('#btnShowLinks', (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    $('.filter-list-link').fadeIn('slow');
    $('#btnShowLinks').remove();
  });

  if (delayedSubscriptionSelection) {
    startSubscriptionSelection(...delayedSubscriptionSelection);
  }
});

$(async () => {
  await initializeProxies();
  const $txtInputCustomURL = $('#txtNewSubscriptionUrl');
  $txtInputCustomURL.attr('placeholder', translate('enter_url'));
  removeBottomLine('all');

  if (!License || $.isEmptyObject(License) || !MABPayment) {
    return;
  }
  const payInfo = MABPayment.initialize('filters');
  if (License.shouldShowMyAdBlockEnrollment()) {
    MABPayment.freeUserLogic(payInfo);
  } else if (License.isActiveLicense()) {
    MABPayment.paidUserLogic(payInfo);
  }

  MABPayment.displaySyncCTAs();
  $('.sync-cta #get-it-now-filters').on('click', MABPayment.userClickedSyncCTA);
  $('.sync-cta #close-sync-cta-filters').on('click', MABPayment.userClosedSyncCTA);
  $('a.link-to-tab').on('click', (event) => {
    activateTab($(event.target).attr('href'));
  });
});
