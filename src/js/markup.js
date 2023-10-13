export default function createMarkup(arr) {
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
      }) => `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b${likes}>Likes</b>
    </p>
    <p class="info-item">
      <b${views}>Views</b>
    </p>
    <p class="info-item">
      <b${comments}>Comments</b>
    </p>
    <p class="info-item">
      <b${downloads}>Downloads</b>
    </p>
  </div>
</div>`
    )
    .join('');
}
