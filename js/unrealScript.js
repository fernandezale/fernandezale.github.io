const professionalProjectData = {
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
    }
  };

  const personalProjectData = {
    'ShooterGame': {
        title: 'ShooterGame',
        description: 'I developed new weapons with their unique shooting styles, such as pistols, shotguns, and sniper rifles. Customize the UI for new weapons. Create pickups for weapons and ammo. Modify the inventory for more weapons.',
        bg: 'ShooterGame-bg.jpg',
        images: [
            'ShooterGamePickups.png',
            'ShooterGameShotgun.png',
            'ShooterGameSniper1.png',
            'ShooterGameSniper2.png'
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
    const p = professionalProjectData[key];
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

function showPersonalProject(key) {
    const p = personalProjectData[key];
    document.getElementById('projects').style.display = 'none';
    document.getElementById('personal-project-detail').style.display = 'block';
    document.getElementById('personal-project-title').textContent = p.title;
    document.getElementById('personal-project-description').textContent = p.description;
    document.getElementById('personal-project-bg').style.backgroundImage = `url(${p.bg})`;

    const imagesContainer = document.getElementById('personal-project-images');
    if (p.images && p.images.length > 0) {
        imagesContainer.innerHTML = `
            <div class="image-carousel">
                ${p.images.map(img => `<img src="${img}" alt="" />`).join('')}
            </div>
        `;
    } else {
        imagesContainer.innerHTML = '';
    }
}

function goBackPersonal() {
    document.getElementById('projects').style.display = 'block';
    document.getElementById('personal-project-detail').style.display = 'none';
}