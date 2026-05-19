// Base de datos de proyectos profesionales y personales
const professionalProjectData = {
    'MySims': {
        title: 'My Sims: Cozy Bundle',
        description: 'Gameplay Programmer EA project using C++ and LUA. Developed game loops, UI frameworks, and local system configurations.',
        bg: '../assets/MySims-Cozy-Bundle.jpg',
        images: [
            '../assets/MySims-Cozy-Bundle.jpg', // Usamos la de portada como primera opción
            '../assets/MySims-1.png',
            '../assets/MySims-2.png'
        ]
    },
    'Mecenas': {
        title: 'ARTé: Mecenas®',
        description: 'Game developed at TheOGs for Triseum/ Educative. Gameplay Programmer, UI and Tools using Unreal Engine and C++.',
        bg: '../assets/MecenasUEMenu.png',
        images: [
            '../assets/MecenasUEMenu.png',
            '../assets/Mecenas-1.png',
            '../assets/Mecenas-2.png',
            '../assets/Mecenas-3.png'
        ]
    }
};

const personalProjectData = {
    'ShooterGame': {
        title: 'ShooterGame',
        description: 'I developed new weapons with their unique shooting styles, such as pistols, shotguns, and sniper rifles. Customize the UI for new weapons. Create pickups for weapons and ammo. Modify the inventory for more weapons.',
        bg: '../assets/ShooterGamePickups.png', // Ajustado path relativo correcto
        images: [
            '../assets/ShooterGamePickups.png',
            '../assets/ShooterGameShotgun.png',
            '../assets/ShooterGameSniper1.png',
            '../assets/ShooterGameSniper2.png'
        ]
    },
    'GASProject': {
        title: 'GAS Project',
        description: 'Diseñe un proyecto usando Gameplay Ability System (GAS) en Unreal Engine, actualmente en proceso de optimización.',
        bg: '../assets/GASProject-bg.jpg',
        images: [
            '../assets/GASProject-1.jpg',
            '../assets/GASProject-2.jpg'
        ]
    }
};

/**
 * Genera el HTML de un Carrusel de Bootstrap 5 de manera dinámica
 * @param {string[]} images - Array de rutas de imágenes
 * @param {string} carouselId - ID único para evitar colisiones en el DOM
 */
function buildBootstrapCarousel(images, carouselId) {
    if (!images || images.length === 0) return '<p class="text-muted">No hay imágenes disponibles para este proyecto.</p>';

    // 1. Crear los indicadores (los puntitos de abajo)
    const indicators = images.map((_, index) => `
        <button type="button" 
                data-bs-target="#${carouselId}" 
                data-bs-slide-to="${index}" 
                class="${index === 0 ? 'active' : ''}" 
                aria-current="${index === 0 ? 'true' : 'false'}" 
                aria-label="Slide ${index + 1}">
        </button>
    `).join('');

    // 2. Crear los items (las imágenes del carrusel)
    const items = images.map((img, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${img}" 
                 class="d-block w-100 rounded" 
                 alt="Captura del proyecto"
                 style="height: 450px; object-fit: contain; background-color: #0b0e11;"
                 onerror="this.onerror=null; this.src='https://placehold.co/800x450/1a1a1a/cccccc?text=Imagen+no+encontrada'">
        </div>
    `).join('');

    // 3. Retornar el componente completo con la estructura oficial de Bootstrap 5
    return `
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
            <div class="carousel-indicators">
                ${indicators}
            </div>
            <div class="carousel-inner">
                ${items}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
    `;
}

// --- LOGICA DE NAVEGACION ---

// Mostrar proyecto profesional
function showProject(key) {
    const p = professionalProjectData[key];
    if (!p) {
        console.error(`Proyecto profesional con llave "${key}" no encontrado.`);
        return;
    }

    // Ocultar grilla principal, mostrar detalle
    document.getElementById('projects-overview').style.display = 'none';
    document.getElementById('project-detail').style.display = 'block';

    // Rellenar datos de texto
    document.getElementById('project-title').textContent = p.title;
    document.getElementById('project-description').textContent = p.description;

    // Renderizar carrusel dinámico en el contenedor correspondiente
    const carouselContainer = document.getElementById('project-carousel-container');
    carouselContainer.innerHTML = buildBootstrapCarousel(p.images, 'proCarousel');
}

// Volver de proyecto profesional
function goBack() {
    document.getElementById('projects-overview').style.display = 'block';
    document.getElementById('project-detail').style.display = 'none';
}

// Mostrar proyecto personal
function showPersonalProject(key) {
    const p = personalProjectData[key];
    if (!p) {
        console.error(`Proyecto personal con llave "${key}" no encontrado.`);
        return;
    }

    // Ocultar grilla principal, mostrar detalle
    document.getElementById('projects-overview').style.display = 'none';
    document.getElementById('project-detail').style.display = 'block';

    // Rellenar datos
    document.getElementById('project-title').textContent = p.title;
    document.getElementById('project-description').textContent = p.description;

    // Renderizar carrusel
    const carouselContainer = document.getElementById('project-carousel-container');
    carouselContainer.innerHTML = buildBootstrapCarousel(p.images, 'personalCarousel');
}