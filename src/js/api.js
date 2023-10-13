import axios from 'axios';

export async function getImage(searchQuery, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '39941682-76fa8d5585fc0f3711900558e';
  // const axios = require('axios');

  //   const params = new URLSearchParams({
  //     key: API_KEY,
  //     q: searchQuery,
  //     image_type: photo,
  //     orientation: horizontal,
  //     safesearch: true,
  //     page,
  //     per_page: 40,
  //   });

  try {
    const { data } = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
    );
    console.log(data);
    // const { data } = await axios.get(`${BASE_URL}?${params}`);

    return data;
  } catch (error) {
    console.log(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}
