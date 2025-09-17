// Datos simulados de productos y servicios (20 productos)
const productos = [
  { id: 1, titulo: 'Tobogán Inflable Gigante', descripcion: 'Un tobogán inflable enorme para que los niños se deslicen y se diviertan horas.', categoria: 'inflables', costo: '$1500 MXN por día', imagen: 'https://image.made-in-china.com/202f0j00TdyolfqSEkbY/Pool-Commercial-Wet-Dry-Kids-Inflate-Giant-Inflatable-Water-Slide-for-Adult.webp', icono: 'fa-person-biking' },
  { id: 2, titulo: 'Pinta Carita Mágico', descripcion: 'Servicio profesional de pinta caritas con diseños divertidos y coloridos para todas las edades.', categoria: 'pinta-carita', costo: '$500 MXN por hora', imagen: 'https://i.pinimg.com/564x/b0/cc/a7/b0cca745457520615599e0ec43a6bc98.jpg', icono: 'fa-face-smile' },
  { id: 3, titulo: 'Taller de Pinta Acuarelas', descripcion: 'Clases y actividades con acuarelas para que los niños exploren su creatividad.', categoria: 'acuarelas', costo: '$400 MXN por niño', imagen: 'https://lizallegraart.com/wp-content/uploads/2024/07/tecnicas-de-pintura-con-acuarela.png.webp', icono: 'fa-palette' },
  { id: 4, titulo: 'Proyección de Películas Infantiles', descripcion: 'Alquila nuestro proyector para disfrutar películas infantiles en fiestas y eventos.', categoria: 'proyeccion', costo: '$600 MXN por evento', imagen: 'https://cultura.cdmx.gob.mx/storage/app/uploads/public/66b/012/5d8/66b0125d8c81d014272743.jpeg', icono: 'fa-film' },
  { id: 5, titulo: 'Renta de Juegos Didácticos', descripcion: 'Juegos educativos y divertidos para estimular la mente y la coordinación.', categoria: 'otros', costo: '$800 MXN por día', imagen: 'https://pelotinas.s3.amazonaws.com/2023/01/Guarderi%CC%81a-Inflable-Web-7.webp', icono: 'fa-brain' },
  { id: 6, titulo: 'Animación con Payasos', descripcion: 'Animadores profesionales con payasos para alegrar tu fiesta con magia y risas.', categoria: 'otros', costo: '$1200 MXN por hora', imagen: 'https://payasospayin.com/wp-content/uploads/2025/04/Animacion-Divertida-para-Baby-Shower-Invitados-Felices-Payasospayin.webp', icono: 'fa-hat-wizard' },
  { id: 7, titulo: 'Castillo Inflable Pequeño', descripcion: 'Ideal para fiestas en patios y jardines con niños pequeños.', categoria: 'inflables', costo: '$800 MXN por día', imagen: 'https://i5.walmartimages.com/asr/437dd64d-2b87-497b-8921-6db08de36acb.d263f14eedf9798756bcea4c54b559ad.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', icono: 'fa-person-biking' },
  { id: 8, titulo: 'Pinta Carita Fantasía', descripcion: 'Diseños de personajes de cuentos y películas.', categoria: 'pinta-carita', costo: '$450 MXN por hora', imagen: 'https://www.hobbees.com.mx/cdn/shop/products/PrincesadePenasco_12_1bdae1cd-2f5d-4533-825d-573928757051.jpg?v=1610671793&width=1500', icono: 'fa-face-smile' },
  { id: 9, titulo: 'Taller de Acuarelas Temático', descripcion: 'Actividades artísticas con temáticas de temporada.', categoria: 'acuarelas', costo: '$420 MXN por niño', imagen: 'https://scontent.fcjs3-2.fna.fbcdn.net/v/t39.30808-6/548584848_122144560220802380_2509235951463800764_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFoR6F_LnBz41MXaOfj8cWWjbfoFXP_4r2Nt-gVc__ivU17RXAu_Pv_Td4Nou0i8g6uFaXu_kxcJH1UIDSXOd9h&_nc_ohc=bmcPJ0q3QAwQ7kNvwHVH_nH&_nc_oc=Adl4cRa1uy7alpo3X_wifHaKWumb_ynFOYIRwMGZQMOJBp5vCOiWKIn5uo_Tkc-DlWtIO8moLpaMu7rFV8zlix6q&_nc_zt=23&_nc_ht=scontent.fcjs3-2.fna&_nc_gid=yxgGa2FoXEVflSDK26b3KQ&oh=00_AfYcDx8Qn8708rgMZOAUWr0c1NMhSyPqN-xVd5-sTDHEhQ&oe=68CF96BB', icono: 'fa-palette' },
  { id: 10, titulo: 'Proyección al Aire Libre', descripcion: 'Proyecciones de películas en exteriores con pantalla gigante.', categoria: 'proyeccion', costo: '$800 MXN por evento', imagen: 'https://image.made-in-china.com/2f0j00wMOVdImsdDce/Outdoor-Party-Backyard-Cinema-30-500-People-450cmx350cm-Giant-Inflatable-Movie-Screen-Projection.webp', icono: 'fa-film' },
  { id: 11, titulo: 'Renta de Juegos de Mesa', descripcion: 'Juegos de mesa para fomentar la interacción entre niños.', categoria: 'otros', costo: '$600 MXN por día', imagen: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/04/juegos-mesa-vendidos-historia-3304812.jpg', icono: 'fa-brain' },
  { id: 12, titulo: 'Show de Magia', descripcion: 'Ilusionistas y magos para eventos infantiles.', categoria: 'otros', costo: '$1500 MXN por hora', imagen: 'https://i.ytimg.com/vi/W02rfD7EUdk/maxresdefault.jpg', icono: 'fa-hat-wizard' },
  { id: 13, titulo: 'Inflable Tobogán Acuático', descripcion: 'Diversión garantizada con agua en días calurosos.', categoria: 'inflables', costo: '$1800 MXN por día', imagen: 'https://static.rentopolis.com.mx/services/zzzzzzzzzzzzzzzzzzyC/gallery/Mw5ivABLTFypBXaNIX9r-Inflable%20Minios%202.webp', icono: 'fa-person-biking' },
  { id: 14, titulo: 'Pinta Carita Arcoíris', descripcion: 'Colores vivos y diseños personalizados.', categoria: 'pinta-carita', costo: '$500 MXN por hora', imagen: 'https://i.pinimg.com/originals/bf/82/36/bf8236e45c0d78cb3ce3eb4905669bef.jpg', icono: 'fa-face-smile' },
  { id: 15, titulo: 'Taller Creativo de Acuarelas', descripcion: 'Explora técnicas de pintura y creatividad.', categoria: 'acuarelas', costo: '$450 MXN por niño', imagen: 'https://cultura.gobiernodechalco.gob.mx/wp-content/uploads/2021/04/taacua5-1024x768.jpg', icono: 'fa-palette' },
  { id: 16, titulo: 'Proyección de Cortometrajes', descripcion: 'Mini películas para eventos educativos y recreativos.', categoria: 'proyeccion', costo: '$700 MXN por evento', imagen: 'https://www.cidadedacultura.gal/sites/default/files/multimedia/headers/2018/01/pequefilmes2018_1.jpg', icono: 'fa-film' },
  { id: 17, titulo: 'Renta de Puzzles Gigantes', descripcion: 'Juegos de puzzle gigantes para niños y adolescentes.', categoria: 'otros', costo: '$900 MXN por día', imagen: 'https://live.staticflickr.com/844/29345629038_9c6b31708c_b.jpg', icono: 'fa-brain' },
  { id: 18, titulo: 'Animación con Personajes', descripcion: 'Personajes disfrazados para interacción con niños.', categoria: 'otros', costo: '$1300 MXN por hora', imagen: 'https://res.cloudinary.com/kosmoapp/image/upload/v1661978302/services/images/wqwzrth2f0qclaex33zh.jpg', icono: 'fa-hat-wizard' },
  { id: 19, titulo: 'Mini Inflable Castillo', descripcion: 'Para niños pequeños en espacios reducidos.', categoria: 'inflables', costo: '$700 MXN por día', imagen: 'https://m.media-amazon.com/images/I/81AqQSVGWqL.jpg', icono: 'fa-person-biking' },
  { id: 20, titulo: 'Pinta Carita Animales', descripcion: 'Diseños de animales y mascotas divertidas.', categoria: 'pinta-carita', costo: '$480 MXN por hora', imagen: 'https://static.wixstatic.com/media/08b0f7_b414bce8a0f24e67a17847ebc7cee812~mv2.jpeg/v1/fit/w_800,h_1067,al_c,q_85/08b0f7_b414bce8a0f24e67a17847ebc7cee812~mv2.jpeg', icono: 'fa-face-smile' },
];

// Selección de elementos del DOM
const productoCardsContainer = document.getElementById('productoCards');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const modal = document.getElementById('modalProducto');
const modalCloseBtn = modal.querySelector('.modal-close');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalCat = document.getElementById('modalCat');
const modalCost = document.getElementById('modalCost');

// Función para renderizar productos
function renderProductos() {
  const busqueda = searchInput.value.trim().toLowerCase();
  const categoria = categoryFilter.value;

  const productosFiltrados = productos.filter(prod => {
    const enCategoria = categoria === 'todos' || prod.categoria === categoria;
    const enBusqueda = prod.titulo.toLowerCase().includes(busqueda) || prod.descripcion.toLowerCase().includes(busqueda);
    return enCategoria && enBusqueda;
  });

  if (productosFiltrados.length === 0) {
    productoCardsContainer.innerHTML = `<p style="text-align:center; font-size:1.15rem; color:var(--color5);">¡No encontramos productos que coincidan con tu búsqueda!</p>`;
    return;
  }

  productoCardsContainer.innerHTML = productosFiltrados.map(prod => `
    <article tabindex="0" class="card" role="button" aria-pressed="false" aria-label="Ver detalles de ${prod.titulo}" data-id="${prod.id}">
      <img src="${prod.imagen}" alt="Imagen de ${prod.titulo}" loading="lazy" />
      <div class="card-content">
        <h3 class="card-title">
          <i class="fas ${prod.icono}" aria-hidden="true" style="color: var(--color4); margin-right: 8px;"></i>${prod.titulo}
        </h3>
        <p class="card-desc">${prod.descripcion.substring(0, 70)}...</p>
        <button class="card-btn" aria-label="Más información sobre ${prod.titulo}">Más info</button>
      </div>
    </article>
  `).join('');

  // Eventos para abrir modal
  const cards = productoCardsContainer.querySelectorAll('.card');
  cards.forEach(card => {
    const id = parseInt(card.dataset.id);
    card.querySelector('.card-btn').addEventListener('click', e => {
      e.stopPropagation();
      abrirModalProducto(id);
    });
    card.addEventListener('click', () => abrirModalProducto(id));
    card.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        abrirModalProducto(id);
      }
    });
  });
}

// Función para abrir modal
function abrirModalProducto(id) {
  const producto = productos.find(p => p.id === id);
  if(!producto) return;
  modalImg.src = producto.imagen;
  modalImg.alt = producto.titulo;
  modalTitle.textContent = producto.titulo;
  modalDesc.textContent = producto.descripcion;
  modalCat.textContent = `Categoría: ${categoriaNombre(producto.categoria)}`;
  modalCost.textContent = `Costo: ${producto.costo}`;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  modalCloseBtn.focus();
}

// Función para cerrar modal
function cerrarModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}

// Nombre legible para categorías
function categoriaNombre(categoria) {
  switch(categoria){
    case 'inflables': return 'Inflables';
    case 'pinta-carita': return 'Pinta carita';
    case 'acuarelas': return 'Pinta acuarelas';
    case 'proyeccion': return 'Proyección de películas';
    case 'otros': return 'Otros servicios';
    default: return '';
  }
}

// Filtros y búsqueda
searchInput.addEventListener('input', renderProductos);
categoryFilter.addEventListener('change', renderProductos);

// Modal eventos
modalCloseBtn.addEventListener('click', cerrarModal);
modal.addEventListener('click', e => { if(e.target === modal) cerrarModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape' && modal.classList.contains('show')) cerrarModal(); });

// Inicialización
document.addEventListener('DOMContentLoaded', renderProductos);

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
});
