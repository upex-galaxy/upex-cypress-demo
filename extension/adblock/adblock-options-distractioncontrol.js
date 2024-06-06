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
/* global translate, License, MABPayment,
   activateTab, browser, storageSet, storageGet, initializeProxies,
   SubscriptionsProxy, send, isDistractionControlURL   */

// the elements array below are in the order they appear on the page
const distractionControlUIitems = [
  {
    id: 'distraction-control-push',
    title: translate('block_site_notifications'),
    description: translate('decline_allow_notifications'),
    imageURL: 'icons/distraction-control-push.svg',
    topLineClass: '',
  },
  {
    id: 'distraction-control-video',
    title: translate('stop_autoplay_videos'),
    description: translate('prevent_videos'),
    imageURL: 'icons/distraction-control-video.svg',
    topLineClass: 'top-line',
  },
  {
    id: 'distraction-control-newsletter',
    title: translate('hide_newsletter_popups'),
    description: translate('block_newsletter_popups'),
    imageURL: 'icons/distraction-control-newsletter.svg',
    topLineClass: 'top-line',
  },
  {
    id: 'distraction-control-survey',
    title: translate('ignore_survey_requests'),
    description: translate('dismiss_invitations'),
    imageURL: 'icons/distraction-control-survey.svg',
    topLineClass: 'top-line',
  },
];

const dcWarningClosedKey = 'dc_warning_closed';
let dcWarningClosed = storageGet(dcWarningClosedKey);

const DistractionControlURL = 'https://easylist-downloads.adblockplus.org/adblock_premium.txt';

function getDefaultDCFilterUI(entry, isActiveLicense) {
  const $filterTitle = $('<span>')
    .addClass('dc_filter_list_title')
    .text(entry.title);

  const $filterHeader = $('<div>')
    .append($filterTitle);

  const $extraInformation = $('<div>')
    .addClass('dc_extra_info')
    .text(entry.description);

  const $filterInfo = $('<div>')
    .append($filterHeader)
    .append($extraInformation);

  const $label = $('<label>')
    .append($filterInfo);

  if (!isActiveLicense) {
    $label.css({
      cursor: 'pointer',
    });
  }

  const $lockIcon = $('<i>lock_open</i>')
    .css({
      color: 'white',
    })
    .attr('role', 'img')
    .attr('aria-hidden', 'true')
    .addClass('md-48')
    .addClass('material-icons');

  const $lockOverlay = $('<span>')
    .addClass('dc_locked_overlay')
    .addClass('do-not-display')
    .append($lockIcon);

  const $image = $('<img>').attr('src', entry.imageURL);

  const $imageWrapper = $('<div>')
    .addClass('dc_image_wrapper')
    .append($image)
    .append($lockOverlay);

  const $leftWrapper = $('<span>')
    .addClass('right_dc_subscription')
    .append($label);

  const $checkboxHeaderLine = $('<div>')
    .addClass('dc_subscription')
    .addClass('dc_section_padding')
    .append($imageWrapper)
    .append($leftWrapper);


  const $filterWrapper = $('<div>')
    .addClass('filter-subscription-wrapper')
    .addClass(entry.topLineClass)
    .append($checkboxHeaderLine);

  if (!isActiveLicense) {
    $filterWrapper.addClass('locked');
    $checkboxHeaderLine.addClass('locked');
    $filterWrapper.on('click', () => {
      browser.tabs.create({ url: License.MAB_CONFIG.payURL });
    });
  }

  return $filterWrapper;
}

const prepareDCItems = function prepareDCItems(isActiveLicense) {
  for (const id in distractionControlUIitems) {
    const entry = distractionControlUIitems[id];
    $('#distraction-control-filter-lists').append(getDefaultDCFilterUI(entry, isActiveLicense));
  }
};

const initializeDC = async function initializeDC(isActiveLicense) {
  prepareDCItems(isActiveLicense);

  if (!isActiveLicense) {
    return;
  }
  $('#distraction-control-filter-lists-switch').on('change', async function onOptionSelectionChange() {
    const isEnabled = $(this).is(':checked');
    if (isEnabled) {
      await SubscriptionsProxy.add(DistractionControlURL);
      await SubscriptionsProxy.sync(DistractionControlURL);
    } else {
      await SubscriptionsProxy.remove(DistractionControlURL);
    }
  });
  const hasDC = await SubscriptionsProxy.has(DistractionControlURL);
  $('#distraction-control-filter-lists-switch').prop('checked', hasDC);
  $('#distractioncontrol .page-title .locked').hide();
  $('#distractioncontrol .page-title .switch').show();

  if (!dcWarningClosed) {
    $('.distraction-control-warning').css({ display: 'flex' });
    $('#distraction-control-warning-button').on('click', () => {
      $('.distraction-control-warning').slideUp();
      dcWarningClosed = true;
      storageSet(dcWarningClosedKey, dcWarningClosed);
    });
    $('#dc_more_information_link').on('click', () => {
      send('openTab', { urlToOpen: 'https://help.getadblock.com/support/solutions/articles/6000250028-about-distraction-control' });
    });
  }
};


$(async () => {
  await initializeProxies();

  if (!License || $.isEmptyObject(License) || !MABPayment) {
    initializeDC(false);
    return;
  }
  initializeDC(License.isActiveLicense());
  const payInfo = MABPayment.initialize('distraction-control');
  if (License.shouldShowMyAdBlockEnrollment()) {
    MABPayment.freeUserLogic(payInfo);
    $('#get-it-now-distraction-control').on('click', MABPayment.userClickedPremiumCTA);
  } else if (License.isActiveLicense()) {
    MABPayment.paidUserLogic(payInfo);
  }

  $('a.link-to-tab').on('click', (event) => {
    activateTab($(event.target).attr('href'));
  });
});

const updateCheckbox = function (item, isChecked) {
  if (isDistractionControlURL(item.url)) {
    $('#distraction-control-filter-lists-switch').prop('checked', isChecked);
  }
};

const onDCSubAdded = function (items) {
  let item = items;
  if (Array.isArray(items)) {
    [item] = items;
  }
  updateCheckbox(item, true);
};
SubscriptionsProxy.onAdded.addListener(onDCSubAdded);

const onDCSubRemoved = function (items) {
  let item = items;
  if (Array.isArray(items)) {
    [item] = items;
  }
  updateCheckbox(item, false);
};
SubscriptionsProxy.onRemoved.addListener(onDCSubRemoved);
