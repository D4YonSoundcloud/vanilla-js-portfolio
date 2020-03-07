const mainContainer = document.getElementById("main-container");
const projectsContainer = document.getElementById("projects-container");
const githubContainer = document.getElementById("github-container");
const aboutContainer = document.getElementById("about-container");
const bigProjectsContainer = document.getElementById("big-projects-container");
const smallProjectsContainer = document.getElementById("small-projects-container");
const backArrowProjects = document.getElementById("backarrow-projects");
const backArrowBigProjects = document.getElementById("backarrow-big-projects");
const backArrowSmallProjects = document.getElementById("backarrow-small-projects");
const backArrowGithub = document.getElementById("backarrow-github");
const backArrowAboutMe = document.getElementById("backarrow-aboutme");
const githubIcon = document.getElementById("github-icon");
const aboutTitle = document.getElementById("about");
const homePageTitle = document.getElementById("home-page-title");
const homePageFooter = document.getElementById("home-page-footer");
const body = document.body;
console.log(mainContainer);

const projectsBTN = document.getElementById("projects-btn");
const githubBTN = document.getElementById("github-btn");
const aboutBTN = document.getElementById("about-btn");
const bigProjectsBTN = document.getElementById("big-projects-btn");
const smallProjectsBTN = document.getElementById("small-projects-btn");

projectsBTN.addEventListener("click", () => {
  projectsBTN.style.opacity = 0;
  githubBTN.style.opacity = 0;
  aboutBTN.style.opacity = 0;
  body.classList.add("projects-style");
  homePageTitle.classList.add("hide");
  homePageFooter.classList.add("hide");
  backArrowProjects.classList.add("backarrow-projects");
  mainContainer.classList.add("projects-style");
  projectsContainer.classList.add("show-projects");
});

backArrowProjects.addEventListener("click", () => {
  projectsBTN.style.opacity = 1;
  githubBTN.style.opacity = 1;
  aboutBTN.style.opacity = 1;
  body.classList.remove("projects-style");
  mainContainer.classList.remove("projects-style");
  projectsContainer.classList.remove("show-projects");
  backArrowProjects.classList.remove("backarrow-projects");
  homePageTitle.classList.remove("hide");
  homePageFooter.classList.remove("hide");
});

githubBTN.addEventListener("click", () => {
  projectsBTN.style.opacity = 0;
  githubBTN.style.opacity = 0;
  aboutBTN.style.opacity = 0;
  body.classList.add("github-style");
  mainContainer.classList.add("github-div-style");
  backArrowGithub.classList.add("backarrow-github");
  githubContainer.classList.add("show-github");
  githubIcon.classList.add("show-github-icon");
  homePageTitle.classList.add("hide");
  homePageFooter.classList.add("hide");
});

backArrowGithub.addEventListener("click", () => {
  projectsBTN.style.opacity = 1;
  githubBTN.style.opacity = 1;
  aboutBTN.style.opacity = 1;
  mainContainer.classList.remove("github-div-style");
  githubContainer.classList.remove("show-github");
  body.classList.remove("github-style");
  backArrowGithub.classList.remove("backarrow-github");
  homePageTitle.classList.remove("hide");
  homePageFooter.classList.remove("hide");
});

aboutBTN.addEventListener("click", () => {
  projectsBTN.style.opacity = 0;
  githubBTN.style.opacity = 0;
  aboutBTN.style.opacity = 0;
  document.getElementById("about").classList.add("about-text");
  body.classList.add("about-style");
  mainContainer.classList.add("about-div-style");
  backArrowAboutMe.classList.add("backarrow-aboutme");
  aboutContainer.classList.add("show-about");
  homePageTitle.classList.add("hide");
  homePageFooter.classList.add("hide");
});

backArrowAboutMe.addEventListener("click", () => {
  projectsBTN.style.opacity = 1;
  githubBTN.style.opacity = 1;
  aboutBTN.style.opacity = 1;
  aboutTitle.classList.remove("about-text");
  aboutContainer.classList.remove("show-about");
  body.classList.remove("about-style");
  backArrowAboutMe.classList.remove("backarrow-aboutme");
  mainContainer.classList.remove("about-div-style");
  homePageTitle.classList.remove("hide");
  homePageFooter.classList.remove("hide");
});

bigProjectsBTN.addEventListener("click", () => {
  bigProjectsBTN.style.opacity = 0;
  smallProjectsBTN.style.opacity = 0;
  body.classList.add("big-projects-style");
  backArrowProjects.classList.remove("backarrow-projects");
  backArrowBigProjects.classList.add("big");
  console.log("working");
  mainContainer.classList.add("big-projects-style");
  bigProjectsContainer.classList.add("show-big-projects");
  console.log("done");
});

backArrowBigProjects.addEventListener("click", () => {
  bigProjectsBTN.style.opacity = 1;
  smallProjectsBTN.style.opacity = 1;
  body.classList.remove("big-projects-style");
  body.classList.add("projects-style");
  backArrowBigProjects.classList.remove("big");
  backArrowProjects.classList.add("backarrow-projects");
  mainContainer.classList.remove("big-projects-style");
  mainContainer.classList.add("projects-style");
  bigProjectsContainer.classList.remove("show-big-projects");
  projectsContainer.classList.add("show-projects");
});

smallProjectsBTN.addEventListener("click", () => {
    bigProjectsBTN.style.opacity = 0;
    smallProjectsBTN.style.opacity = 0;
    body.classList.add("small-projects-style");
    backArrowProjects.classList.remove("backarrow-projects");
    backArrowSmallProjects.classList.add("small");
    console.log("working");
    mainContainer.classList.remove("projects-style");
    mainContainer.classList.add("small-projects-style");
    smallProjectsContainer.classList.add("show-small-projects");
    console.log("done");
  });

  backArrowSmallProjects.addEventListener("click", () => {
    bigProjectsBTN.style.opacity = 1;
    smallProjectsBTN.style.opacity = 1;
    body.classList.remove("small-projects-style");
    body.classList.add("projects-style");
    backArrowSmallProjects.classList.remove("small");
    backArrowProjects.classList.add("backarrow-projects");
    mainContainer.classList.remove("small-projects-style");
    mainContainer.classList.add("projects-style");
    smallProjectsContainer.classList.remove("show-small-projects");
    projectsContainer.classList.add("show-projects");
  });