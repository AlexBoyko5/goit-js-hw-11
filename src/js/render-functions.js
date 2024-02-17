export function addImagesToGallery(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Очищаем галерею перед добавлением новых изображений

    images.forEach(image => {
        // Создаем HTML-разметку для каждого изображения и его информации
        const imageMarkup = `
            <div class="image-container">
                <img src="${image.webformatURL}" alt="${image.tags}">
                <div class="image-caption">
                    <span>Likes: ${image.user_likes}</span>
                    <span>Views: ${image.user_views}</span>
                    <span>Comments: ${image.user_comments}</span>
                    <span>Downloads: ${image.user_downloads}</span>
                </div>
            </div>
        `;

        // Добавляем HTML-разметку в галерею с помощью innerHTML
        gallery.innerHTML += imageMarkup;
    });
}
