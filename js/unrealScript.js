/**
 * UNREAL ENGINE PORTFOLIO — Script de lógica
 * Alexis Fernandez — Gameplay Programmer
 */

// =============================================================================
// BASE DE DATOS DE PROYECTOS
// =============================================================================

const projectData = {

    // ── PROYECTOS PROFESIONALES ──────────────────────────────────────────────

    'MySims': {
        title: 'My Sims: Cozy Bundle',
        studio: 'Electronic Arts',
        role: 'Gameplay Programmer',
        badge: 'Proyecto Publicado',
        description: `Colaboré como Gameplay Programmer en My Sims: Cozy Bundle para Electronic Arts. 
                      Mi trabajo incluyó el desarrollo de game loops y lógica de jugabilidad en C++ y LUA, 
                      la implementación de frameworks de UI, y la gestión de configuraciones de sistema local. 
                      El juego fue publicado y lanzado al mercado, siendo una experiencia de trabajo dentro 
                      de un equipo de desarrollo profesional con metodologías ágiles.`,
        tags: ['C++', 'LUA', 'Unreal Engine', 'UI Systems', 'Game Loops'],
        bg: '../assets/MySims-Cozy-Bundle.jpg',
        images: [
            '../assets/MySims-Cozy-Bundle.jpg',
            '../assets/MySims-1.png',
            '../assets/MySims-2.png'
        ]
    },

    'Mecenas': {
        title: 'ARTé: Mecenas®',
        studio: 'TheOGs / Triseum',
        role: 'Gameplay Programmer & UMG',
        badge: 'Proyecto Publicado',
        description: `Desarrollo en ARTé: Mecenas® para Triseum, un videojuego educativo centrado en el arte 
                      del Renacimiento italiano. Fui responsable de los sistemas de gameplay en C++, 
                      el diseño e implementación de interfaces de usuario con UMG (Unreal Motion Graphics), 
                      y la creación de herramientas de desarrollo internas para el equipo de contenido. 
                      Trabajé bajo la dirección de TheOGs colaborando directamente con el cliente Triseum.`,
        tags: ['C++', 'UMG', 'Blueprints', 'UE5', 'Tools Dev', 'Educative'],
        bg: '../assets/MecenasUEMenu.png',
        images: [
            '../assets/MecenasUEMenu.png',
            '../assets/Mecenas-1.png',
            '../assets/Mecenas-2.png',
            '../assets/Mecenas-3.png'
        ]
    },

    // ── PROYECTOS PERSONALES ─────────────────────────────────────────────────

    'ShooterGame': {
        title: 'ShooterGame',
        studio: 'Proyecto Personal',
        role: 'Game Developer',
        badge: 'Proyecto Personal',
        description: `Proyecto personal desarrollado sobre la base de Unreal Engine para explorar y 
                      profundizar en mecánicas de combate y sistemas de armas. Implementé nuevas armas 
                      con estilos de disparo únicos: pistola, escopeta y rifle de francotirador, 
                      cada una con su propia lógica de comportamiento. También diseñé una UI personalizada 
                      para la HUD de armas, un sistema de pickups para armas y munición, y amplié el 
                      inventario para soporte de múltiples armas simultáneas.`,
        tags: ['C++', 'UE5', 'Gameplay', 'Inventario', 'UI / HUD', 'Weapons'],
        bg: '../assets/ShooterGamePickups.png',
        images: [
            '../assets/ShooterGamePickups.png',
            '../assets/ShooterGameShotgun.png',
            '../assets/ShooterGameSniper1.png',
            '../assets/ShooterGameSniper2.png'
        ]
    }
};

// =============================================================================
// GENERADOR DE CARRUSEL (Bootstrap 5)
// =============================================================================

/**
 * Genera el HTML de un carrusel Bootstrap 5 de forma dinámica.
 * @param {string[]} images  - Rutas de imágenes
 * @param {string}   carouselId - ID único para evitar colisiones en el DOM
 */
function buildCarousel(images, carouselId) {
    if (!images || images.length === 0) {
        return '<p class="text-center text-secondary py-5">No hay imágenes disponibles para este proyecto.</p>';
    }

    const indicators = images.map((_, i) => `
        <button type="button"
                data-bs-target="#${carouselId}"
                data-bs-slide-to="${i}"
                class="${i === 0 ? 'active' : ''}"
                aria-current="${i === 0 ? 'true' : 'false'}"
                aria-label="Diapositiva ${i + 1}">
        </button>
    `).join('');

    const items = images.map((src, i) => `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
            <img src="${src}"
                 class="d-block w-100"
                 alt="Captura del proyecto"
                 style="height: 500px; object-fit: contain; background-color: #050608;"
                 onerror="this.onerror=null; this.src='https://placehold.co/900x500/111827/4b5563?text=Imagen+no+disponible'">
        </div>
    `).join('');

    return `
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div class="carousel-indicators">${indicators}</div>
            <div class="carousel-inner">${items}</div>
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

// =============================================================================
// NAVEGACIÓN ENTRE VISTAS
// =============================================================================

/**
 * Muestra la vista de detalle de un proyecto.
 * @param {string} key - Clave del proyecto en projectData
 */
function showProject(key) {
    const p = projectData[key];
    if (!p) {
        console.error(`Proyecto "${key}" no encontrado en projectData.`);
        return;
    }

    // Ocultar grid / mostrar detalle
    document.getElementById('projects-overview').style.display = 'none';
    document.getElementById('project-detail').style.display = 'block';

    // Hacer scroll arriba para ver la vista detalle
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Rellenar metadatos
    document.getElementById('project-title').textContent       = p.title;
    document.getElementById('project-description').textContent = p.description;
    document.getElementById('project-studio').textContent      = p.studio;
    document.getElementById('project-role').textContent        = p.role;
    document.getElementById('project-badge').textContent       = p.badge;

    // Inyectar tags de tecnología
    const tagsContainer = document.getElementById('project-tags');
    tagsContainer.innerHTML = (p.tags || [])
        .map(t => `<span class="tag">${t}</span>`)
        .join('');

    // Renderizar carrusel
    document.getElementById('project-carousel-container').innerHTML =
        buildCarousel(p.images, `carousel-${key}`);
}

/**
 * Vuelve al grid de proyectos desde la vista de detalle.
 */
function goBack() {
    document.getElementById('projects-overview').style.display = 'block';
    document.getElementById('project-detail').style.display   = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mantener compatibilidad con el onclick del HTML original
function showPersonalProject(key) {
    showProject(key);
}
