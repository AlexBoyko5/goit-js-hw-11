import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// const loader = document.getElementById('loader');

function handleFormSubmit(event) {
    event.preventDefault();
    // loader.style.display = 'block';
    const apiKey = '42334631-07f239856d3b6a49db441bfb9';
    const searchPicture = document.getElementById("searchRequest").value.trim();
    if (searchPicture === "") {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query.'
        });
        return false;
    }

    const params = new URLSearchParams({
        key: apiKey,
        q: searchPicture,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    });

    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchPicture)}${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })

        .then(data => {
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = '';
            if (data.hits.length === 0) {
                iziToast.info({
                    title: 'Info',
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
            } else {
                const galleryMarkup = data.hits.map(image => {
                    return `<a href="${image.largeImageURL}">
<img src="${image.previewURL}" alt="${image.tags}">
<div class="image-caption">
<span>Likes: ${image.likes}</span>
<span>Views: ${image.views}</span>
<span>Comments: ${image.comments}</span>
<span>Downloads: ${image.downloads}</span>
</div>
                    </a>`;
                }).join('');
                gallery.innerHTML = galleryMarkup;
                new SimpleLightbox('.gallery a');
            }
            // loader.style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images. Please try again later.',
            });
            // loader.style.display = 'none';
        });
    event.currentTarget.reset()
    return false;
}

const form = document.getElementById('searchForm');
form.addEventListener('submit', handleFormSubmit);