// import axios from 'axios';
import Notiflix from 'notiflix';
import axios from 'axios';
import createMarkup from './markup';
import { getImage } from './api';
// const axios = require('axios');

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

  console.log(searchQuery);

  getImage(searchQuery, page)
    .then(data => {
      window.alert(`Hooray! We found ${data.totalHits} images`);
      console.log(data);
      // console.log(data.total);
      // console.log(page);

      const markup = createMarkup(data);
      refs.listGallery.insertAdjacentHTML('beforeend', markup);

      if (page < data.totalHits) {
        refs.btnLoadMore.classList.replace('load-more-hidden', 'load-more');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

// !Load-More

refs.btnLoadMore.addEventListener('click', onLoadMore);
function onLoadMore() {
  page += 1;
  console.log('This is loadmore', page);
  getImage(searchQuery, page)
    .then(data => {
      console.log(data);

      const markup = createMarkup(data);
      refs.listGallery.insertAdjacentHTML('beforeend', markup);

      if (page >= data.totalHits) {
        refs.btnLoadMore.classList.replace('load-more', 'load-more-hidden');
      }
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() =>
      console.log("We're sorry, but you've reached the end of search results.")
    );
}

// !!! з файла апі

// async function getImage(searchQuery, page) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '39941682-76fa8d5585fc0f3711900558e';
//   // const axios = require('axios');

//   //   const params = new URLSearchParams({
//   //     key: API_KEY,
//   //     q: searchQuery,
//   //     image_type: photo,
//   //     orientation: horizontal,
//   //     safesearch: true,
//   // page,
//   // per_page: 40,
//   //   });

//   try {
//     const { data } = await axios.get(
//       `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
//     );
//     console.log(data);

//     // const { data } = await axios.get(`${BASE_URL}?${params}`);
//     return data;
//   } catch (error) {
//     console.log(
//       'Sorry, there are no images matching your search query. Please try again.'
//     );
//   }
// }
