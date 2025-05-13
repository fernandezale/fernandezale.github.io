const projectData = {
    'bolt-storm': {
      title: 'Bolt Storm',
      description: 'Gameplay Programmer in a university project using UE4, C++ and Blueprints.',
      bg: '4552fc1d-8664-4dc8-a847-6b8cf93dee51.png',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
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