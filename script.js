const mainContainer = document.getElementById('main-container');
const projectsContainer = document.getElementById('projects-container');
const githubContainer = document.getElementById('github-container');
const aboutContainer = document.getElementById('about-container');
const body = document.body;
console.log(mainContainer);

const projectsBTN = document.getElementById('projects-btn');
const githubBTN = document.getElementById('github-btn');
const aboutBTN = document.getElementById('about-btn');

projectsBTN.addEventListener('click', () => {
    projectsBTN.style.opacity = 0;
    githubBTN.style.opacity = 0;
    aboutBTN.style.opacity = 0;
    body.classList.add('projects-style');
    mainContainer.classList.add('projects-style');
    projectsContainer.classList.add('show-projects');

})

githubBTN.addEventListener('click', () => {
    projectsBTN.style.opacity = 0;
    githubBTN.style.opacity = 0;
    aboutBTN.style.opacity = 0;
    body.classList.add('github-style');
    mainContainer.classList.add('github-div-style');
    githubContainer.classList.add('show-github');

})

aboutBTN.addEventListener('click', () => {
    projectsBTN.style.opacity = 0;
    githubBTN.style.opacity = 0;
    aboutBTN.style.opacity = 0;
    body.classList.add('about-style');
    mainContainer.classList.add('about-div-style');
    aboutContainer.classList.add('show-about');

})