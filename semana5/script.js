const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImageBtn");
const deleteImageBtn = document.getElementById("deleteImageBtn");
const gallery = document.getElementById("gallery");

let selectedImage = null;

/* Agregar imagen */
addImageBtn.addEventListener("click", () => {
  const url = imageUrlInput.value.trim();

  if (url === "") {
    alert("Por favor ingrese una URL válida.");
    return;
  }

  const img = document.createElement("img");
  img.src = url;

  /* Seleccionar imagen al hacer click */
  img.addEventListener("click", () => {
    selectImage(img);
  });

  gallery.appendChild(img);
  imageUrlInput.value = "";
});

/* Seleccionar imagen */
function selectImage(img) {
  const images = document.querySelectorAll(".gallery img");
  images.forEach(image => image.classList.remove("selected"));

  img.classList.add("selected");
  selectedImage = img;
}

/* Eliminar imagen */
deleteImageBtn.addEventListener("click", () => {
  if (selectedImage) {
    selectedImage.remove();
    selectedImage = null;
  } else {
    alert("Seleccione una imagen primero.");
  }
});

/* Evento input */
imageUrlInput.addEventListener("input", () => {
  console.log("URL escrita:", imageUrlInput.value);
});

/* Atajos de teclado */
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addImageBtn.click();
  }

  if (event.key === "Delete") {
    deleteImageBtn.click();
  }
});
