import axios from 'axios';
export const PER_PAGE_MAX = 40;

export async function getImage(searchQuery, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '39941682-76fa8d5585fc0f3711900558e';

  try {
    const { data } = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${PER_PAGE_MAX}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  }
}
