export default function createMarkup(arr) {
  console.log(arr.hits);

  return arr.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery__item">

      <a href="" class="link">
<img src="${webformatURL}" alt="${tags}" loading="lazy" width="600px"/>
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${downloads}</b>
    </p>
  </div>
</div>
</a>
</li>
`
    )
    .join('');
}

// !2
// export default function createMarkup(arr) {
//   console.log(arr.hits);

//   return arr.hits.map(
//     ({
//       webformatURL,
//       largeImageURL,
//       tags,
//       likes,
//       views,
//       comments,
//       downloads,
//     }) => {
//       const likesString = likes.toString(); // Конвертуємо likes у рядок
//       console.log('Likes as string:', likesString); // Виводимо likes у консоль

//       return { likes: likesString }; // Повертаємо likes як рядок
//     }
//   );
// }
