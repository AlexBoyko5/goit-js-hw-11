import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a');

export function createGalleryMarkup(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = images
        .map(
            (image) => `
    <div class="photo-card">
      <a href="${image.largeImageURL}" target="_blank">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><i class="material-icons">thumb_up</i>${image.likes}</p>
        <p><i class="material-icons">visibility</i>${image.views}</p>
        <p><i class="material-icons">comment</i>${image.comments}</p>
        <p><i class="material-icons">cloud_download</i>${image.downloads}</p>
      </div>
    </div>
  `
        )
        .join('');
    lightbox.refresh();
}
