
export function addImagesToGallery(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('list-item');


        const img = document.createElement('img');
        img.classList.add('item-img');
        img.src = image.webformatURL;
        img.alt = image.tags;


        const info = document.createElement('div');
        info.classList.add('image-info');

        info.innerHTML = `
      <span>Likes: ${image.likes}</span>
      <span>Views: ${image.views}</span>
      <span>Comments: ${image.comments}</span>
      <span>Downloads: ${image.downloads}</span>
    `;

        card.appendChild(img);
        card.appendChild(info);

        gallery.appendChild(card);
    });
}