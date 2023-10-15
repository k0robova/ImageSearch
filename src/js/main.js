// import axios from 'axios';
import Notiflix from 'notiflix';
import axios from 'axios';
import createMarkup from './markup';
import { getImage, PER_PAGE_MAX } from './api';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// const axios = require('axios');

// // !SIMPLELI

// const gallery = new SimpleLightbox('.gallery__item a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });

const refs = {
  searchForm: document.querySelector('.search-form'),
  btnSearch: document.querySelector('.js-btn-search'),
  btnLoadMore: document.querySelector('.btn-load-more'),
  listGallery: document.querySelector('.gallery'),
};

let page = 1;
refs.searchForm.addEventListener('submit', handleSearch);

let searchQuery = '';

function handleSearch(evt) {
  evt.preventDefault();

  page = 1;
  refs.listGallery.innerHTML = '';

  searchQuery = evt.currentTarget.elements.searchQuery.value;

  getImage(searchQuery, page)
    .then(data => {
      console.log(data);

      if (data.totalHits == 0) {
        hideLoadMoreBtn();
        showNotFoundAlert();
        return;
      }

      showSuccessAlert(data);

      console.log(data.hits[0].likes);

      const markup = createMarkup(data);
      refs.listGallery.insertAdjacentHTML('beforeend', markup);
      // refresh
      // gallery.refresh();

      if (page < data.totalHits) {
        refs.btnLoadMore.classList.replace('load-more-hidden', 'load-more');
      }

      if (data.totalHits < PER_PAGE_MAX) {
        hideLoadMoreBtn();
      }
    })
    .catch(error => {
      console.log(error);
    });
}

// !Load-More

refs.btnLoadMore.addEventListener('click', onLoadMore);
function onLoadMore() {
  page += 1;
  refs.btnLoadMore.disabled = true;

  getImage(searchQuery, page)
    .then(data => {
      console.log(data);
      refs.btnLoadMore.disabled = false;

      const markup = createMarkup(data);
      refs.listGallery.insertAdjacentHTML('beforeend', markup);

      // refresh
      // gallery.refresh();

      console.log(page);
      if (page >= data.totalHits) {
        hideLoadMoreBtn();
        showEndCollectionAlert();
      }
    })
    .catch(error => {
      console.error(error);
    });
}

// ! function

function hideLoadMoreBtn() {
  refs.btnLoadMore.classList.replace('load-more', 'load-more-hidden');
}

function showNotFoundAlert() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function showSuccessAlert(data) {
  Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images`);
}

function showEndCollectionAlert() {
  Notiflix.Notify.failure(
    "We're sorry, but you've reached the end of search results."
  );
}
