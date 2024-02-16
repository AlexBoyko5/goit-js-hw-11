import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import "simplelightbox/dist/simple-lightbox.min.css";
import './js/pixabay-api.js';
import './js/render-functions.js';
export function clearGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
}
clearGallery();