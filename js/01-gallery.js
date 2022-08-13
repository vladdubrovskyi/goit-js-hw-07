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
let instance;

function onGalleryClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(
    `<img src="${evt.target.getAttribute("data-source")}" alt="${
      evt.target.alt
    }" width="800" height="600">`
  );

  instance.show();
  addEscapeListener();
}

function onEscapeClose(evt) {
  if (evt.code !== "Escape") {
    return;
  }

  instance.close();
  window.removeEventListener("keyup", addEventListener);
}

function addEscapeListener() {
  window.addEventListener("keyup", onEscapeClose);
}
