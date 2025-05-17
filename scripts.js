const projectData = {
    'MySims': {
      title: 'My Sims: Cozy Bundle',
      description: 'Gameplay Programmer EA project using C++ and LUA.',
      bg: 'MySims-Cozy-Bundle.jpg',
      video: ''
    },
    'avatar': {
      title: 'Avatar: Frontiers of Pandora',
      description: 'AAA game developed at Ubisoft / Massive. Gameplay Programmer using C++.',
      bg: '4b82745c-1f9e-4589-85a9-2ca967de192f.png',
      video: null
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
    videoContainer.innerHTML = p.video
      ? `<iframe width="100%" height="400" src="${p.video}" frameborder="0" allowfullscreen></iframe>`
      : '';
  }
  
  function goBack() {
    document.getElementById('projects-overview').style.display = 'block';
    document.getElementById('project-detail').style.display = 'none';
  }