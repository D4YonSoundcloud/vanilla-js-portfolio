const mainContainer = document.getElementById("main-container");
const projectsContainer = document.getElementById("projects-container");
const githubContainer = document.getElementById("github-container");
const aboutContainer = document.getElementById("about-container");
const bigProjectsContainer = document.getElementById("big-projects-container");
const smallProjectsContainer = document.getElementById(
  "small-projects-container"
);
const bigProjectContainer1 = document.getElementById("big-project-container1");
const bigProjectContainer2 = document.getElementById("big-project-container2");
const bigProjectContainer3 = document.getElementById("big-project-container3");
const backArrowProjects = document.getElementById("backarrow-projects");
const backArrowBigProjects = document.getElementById("backarrow-big-projects");
const backArrowBigProject = document.getElementById("backarrow-big-project");
const backArrowBigProject2 = document.getElementById("backarrow-big-project2");
const backArrowBigProject3 = document.getElementById("backarrow-big-project3");
const backArrowSmallProjects = document.getElementById(
  "backarrow-small-projects"
);
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
const bigProjectBTN1 = document.getElementById("project1");
const bigProjectBTN2 = document.getElementById("project2");
const bigProjectBTN3 = document.getElementById("project3");

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

bigProjectBTN1.addEventListener("click", () => {
  bigProjectBTN2.style.opacity = 0;
  bigProjectBTN3.style.opacity = 0;
  body.classList.add("big-project-style");
  backArrowBigProjects.classList.remove("big");
  backArrowBigProject.classList.add("big-project");
  console.log("working");
  bigProjectBTN1.classList.add('animate-big-btn-1');
  mainContainer.classList.remove("big-projects-style");
  mainContainer.classList.add("big-project-style");
  bigProjectContainer1.classList.add("show-big-project");
  console.log("done");
});

backArrowBigProject.addEventListener("click", () => {
  bigProjectBTN2.style.opacity = 1;
  bigProjectBTN3.style.opacity = 1;
  body.classList.remove("big-project-style");
  body.classList.add("big-projects-style");
  bigProjectContainer1.classList.remove("show-big-project");
  backArrowBigProject.classList.remove("big-project");
  backArrowBigProjects.classList.add("big");
  mainContainer.classList.remove("big-project-style");
  mainContainer.classList.add("big-projects-style");
  bigProjectBTN1.classList.remove('animate-big-btn-1');
});

bigProjectBTN2.addEventListener("click", () => {
    bigProjectBTN1.style.opacity = 0;
    bigProjectBTN3.style.opacity = 0;
    body.classList.add("big-project-style2");
    backArrowBigProjects.classList.remove("big");
    backArrowBigProject2.classList.add("big-project2");
    console.log("working");
    bigProjectBTN2.classList.add('animate-big-btn-2');
    mainContainer.classList.remove("big-projects-style");
    mainContainer.classList.add("big-project-style2");
    bigProjectContainer2.classList.add("show-big-project");
    console.log("done");
  });
  
  backArrowBigProject2.addEventListener("click", () => {
    bigProjectBTN1.style.opacity = 1;
    bigProjectBTN3.style.opacity = 1;
    body.classList.remove("big-project-style2");
    body.classList.add("big-projects-style");
    bigProjectContainer2.classList.remove("show-big-project");
    backArrowBigProject2.classList.remove("big-project2");
    backArrowBigProjects.classList.add("big");
    mainContainer.classList.remove("big-project-style2");
    mainContainer.classList.add("big-projects-style");
    bigProjectBTN2.classList.remove('animate-big-btn-2');
  });

  bigProjectBTN3.addEventListener("click", () => {
    bigProjectBTN1.style.opacity = 0;
    bigProjectBTN2.style.opacity = 0;
    body.classList.add("big-project-style3");
    backArrowBigProjects.classList.remove("big");
    backArrowBigProject3.classList.add("big-project3");
    console.log("working");
    bigProjectBTN3.classList.add('animate-big-btn-3');
    mainContainer.classList.remove("big-projects-style");
    mainContainer.classList.add("big-project-style3");
    bigProjectContainer3.classList.add("show-big-project");
    console.log("done");
  });
  
  backArrowBigProject3.addEventListener("click", () => {
    bigProjectBTN2.style.opacity = 1;
    bigProjectBTN1.style.opacity = 1;
    body.classList.remove("big-project-style3");
    body.classList.add("big-projects-style");
    bigProjectContainer3.classList.remove("show-big-project");
    backArrowBigProject3.classList.remove("big-project3");
    backArrowBigProjects.classList.add("big");
    mainContainer.classList.remove("big-project-style3");
    mainContainer.classList.add("big-projects-style");
    bigProjectBTN3.classList.remove('animate-big-btn-3');
  });