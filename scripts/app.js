function toggleMenu() {
      document.getElementById("menu").classList.toggle("active");
}

    const slider = document.getElementById('slider');
    const contenedores = slider.querySelectorAll('.contenedor');
    let index = 0;

    function moverCarrusel(direccion) {
      index += direccion;
      if (index < 0) index = contenedores.length - 1;
      if (index>= contenedores.length) index = 0;
      const scrollX = contenedores[index].offsetLeft;
      slider.scrollTo({ left: scrollX, behavior: 'smooth'});
}

    setInterval(() => moverCarrusel(1), 3000);
  