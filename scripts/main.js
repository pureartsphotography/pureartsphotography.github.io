var ESC_KEY = 27,
    THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]',
    LIGHTBOX_FRAME_SELECTOR = '[data-image-role="frame"]',
    LIGHTBOX_IMAGE_SELECTOR = '[data-image-role="target"]',
    LIGHTBOX_CLASS = '.lightbox',
    ACTIVE_CLASS = 'active';

// Set Details
function setDetails(imgUrl) {
  'use strict';
  var lightboxImg = document.querySelector(LIGHTBOX_IMAGE_SELECTOR);
  lightboxImg.setAttribute('src', imgUrl);
}

// Get Image URL
function getImageUrl(thumb) {
  'use strict';
  return thumb.getAttribute('data-image-url');
}

// Set Details From thumbnail
function setDetailsFromThumb(thumb) {
  'use strict';
  setDetails(getImageUrl(thumb));
}

// Click Handler
function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showLightbox();
  });
}

// Get Thumbs Array
function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR),
      thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

// Hide lightbox
function hideLightbox() {
  'use strict';
  var lightbox = document.querySelector(LIGHTBOX_CLASS);
  lightbox.classList.remove(ACTIVE_CLASS);
}

// Show lightbox
function showLightbox() {
  'use strict';
  var lightbox = document.querySelector(LIGHTBOX_CLASS);
  lightbox.classList.add(ACTIVE_CLASS);
}

// Add Keypress Handler
function addKeyPressHandler() {
  'use strict';
  document.body.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === ESC_KEY) {
      hideLightbox();
      console.log(event.keyCode);
    }
  });
}

function addCloseHandler() {
  'use strict';
  var closeButton = document.querySelector('.close-lightbox');
  closeButton.addEventListener('click', function(event) {
    event.preventDefault();
    hideLightbox();
  });
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
  addCloseHandler();
}

initializeEvents();
