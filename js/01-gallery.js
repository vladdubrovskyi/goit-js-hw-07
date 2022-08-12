import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  const markup = items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");

  return markup;
}

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.getAttribute("data-source")}" alt="${
      evt.target.alt
    }" width="800" height="600">`
  );

  instance.show();
}
