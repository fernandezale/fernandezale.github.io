const projectData = {
    'MySims': {
      title: 'My Sims: Cozy Bundle',
      description: 'Gameplay Programmer EA project using C++ and LUA.',
      bg: 'MySims-Cozy-Bundle.jpg',
      images: [
        'MySims-1.png',
        'MySims-2.png'
      ]
    },
    'Mecenas': {
      title: 'ARTé: Mecenas®',
      description: 'Game developed at TheOGs for Triseum/ Educative. Gameplay Programmer, UI and Tools using C++.',
      bg: 'MecenasUEMenu.png',
      images: [
        'Mecenas-1.png',
        'Mecenas-2.png',
        'Mecenas-3.png'
      ]
    },
    'ShooterGame': {
        title: 'ShooterGame',
        description: 'Desarrolle nuevas armas como un pistola, escopeta y sniper con sus estilos de disparo. Adapte la UI para las nuevas armas. Cree pickups para las armas. Modifique el inventario para mas armas.',
        bg: 'ShooterGame-bg.jpg',
        images: [
            'ShooterGame-1.jpg',
            'ShooterGame-2.jpg',
            'ShooterGame-3.jpg'
        ]
    },
    'GASProject': {
        title: 'GAS Project',
        description: 'Diseñe un proyecto usando GAS, esta en proceso.',
        bg: 'GASProject-bg.jpg',
        images: [
            'GASProject-1.jpg',
            'GASProject-2.jpg'
        ]
    }
  };
  
  function showProject(key) {
    const p = projectData[key];
    document.getElementById('projects-overview').style.display = 'none';
    document.getElementById('project-detail').style.display = 'block';
    document.getElementById('project-title').textContent = p.title;
    document.getElementById('project-description').textContent = p.description;
    document.getElementById('project-bg').style.backgroundImage = `url(${p.bg})`;

    const videoContainer = document.getElementById('project-video-container');
    if (p.images && p.images.length > 0) {
        videoContainer.innerHTML = `
            <div class="image-carousel">
                ${p.images.map(img => `<img src="${img}" alt="" />`).join('')}
            </div>
        `;
    } else {
        videoContainer.innerHTML = '';
    }
}

function goBack() {
    document.getElementById('projects-overview').style.display = 'block';
    document.getElementById('project-detail').style.display = 'none';
}