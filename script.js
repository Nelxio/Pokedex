function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
    

  function mostrarModal(imagen, descripcion) {
    const modal = document.getElementById("modal");
    const modalImagen = document.getElementById("modal-imagen");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescripcion = document.getElementById("modal-descripcion");
    
    modalImagen.src = imagen;
    modalTitulo.textContent = imagen;
    modalDescripcion.textContent = descripcion;
    
    modal.classList.add("show");
    modal.style.display = "block";
  }
  
  function cerrarModalExterno(event) {
    if (event.target === document.getElementById("modal")) {
      cerrarModal();
    }
  }
  
  window.addEventListener("click", cerrarModalExterno);
  