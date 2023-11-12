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
      }) =>
        //       }) => `<li class="gallery__item">
        //       <a href="" class="link">
        //     <img src="${webformatURL}" alt="${tags}" loading="lazy" width="600px"/>
        //   <div class="info">
        //     <p class="info-item">
        //       <b>Likes: ${likes}</b>
        //     </p>
        //     <p class="info-item">
        //       <b>Views: ${views}</b>
        //     </p>
        //     <p class="info-item">
        //       <b>Comments: ${comments}</b>
        //     </p>
        //     <p class="info-item">
        //       <b>Downloads: ${downloads}</b>
        //     </p>
        //   </div>
        // </div>
        // </a>
        // </li>
        // `
        `<li class="gallery__item">
      <a href="${largeImageURL}" class="link">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" width="600px"/>
       
          <ul class="info">
            <li class="info-item">
              <p>Likes: ${likes}</p>
            </li>
            <li class="info-item">
              <p>Views: ${views}</p>
            </li>
            <li class="info-item">
              <p>Comments: ${comments}</p>
            </li>
            <li class="info-item">
              <p>Downloads: ${downloads}</p>
            </li>
          </ul>
        
      </a>
    </li>`
    )
    .join('');
}
