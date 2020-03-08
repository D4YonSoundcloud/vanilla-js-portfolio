//main container that constanstly shifts through the adding and removing off classes
const mainContainer = document.getElementById("main-container");
//second layer container with small and big projects
const projectsContainer = document.getElementById("projects-container");
//second layer container with github info and link
const githubContainer = document.getElementById("github-container");
//second layer container with mini bio and skills
const aboutContainer = document.getElementById("about-container");
//third layer container for all the big projects
const bigProjectsContainer = document.getElementById("big-projects-container");
//third layer container for all the small projects
const smallProjectsContainer = document.getElementById(
  "small-projects-container"
);
//fourth layer containers for each small project
const smallProjectContainer1 = document.getElementById(
  "small-project-container1"
);
const smallProjectContainer2 = document.getElementById(
  "small-project-container2"
);
const smallProjectContainer3 = document.getElementById(
  "small-project-container3"
);
const smallProjectContainer4 = document.getElementById(
  "small-project-container4"
);
//fourth layer container for each big project
const bigProjectContainer1 = document.getElementById("big-project-container1");
const bigProjectContainer2 = document.getElementById("big-project-container2");
const bigProjectContainer3 = document.getElementById("big-project-container3");
//backarrows for both small and big project
const backArrowProjects = document.getElementById("backarrow-projects");
//backarrows for big projects and each big project
const backArrowBigProjects = document.getElementById("backarrow-big-projects");
const backArrowBigProject = document.getElementById("backarrow-big-project");
const backArrowBigProject2 = document.getElementById("backarrow-big-project2");
const backArrowBigProject3 = document.getElementById("backarrow-big-project3");
const backArrowSmallProjects = document.getElementById(
  "backarrow-small-projects"
);
//backarrows for each small project
const backArrowSmallProject1 = document.getElementById(
  "backarrow-small-project1"
);
const backArrowSmallProject2 = document.getElementById(
  "backarrow-small-project2"
);
const backArrowSmallProject3 = document.getElementById(
  "backarrow-small-project3"
);
const backArrowSmallProject4 = document.getElementById(
  "backarrow-small-project4"
);
//backarrow for github
const backArrowGithub = document.getElementById("backarrow-github");
//backarrow for about
const backArrowAboutMe = document.getElementById("backarrow-aboutme");
//github icon
const githubIcon = document.getElementById("github-icon");
const LinkedInIcon = document.getElementById("li-icon");
//title for about page
const aboutTitle = document.getElementById("about");
//"Matt Day" on the homepage
const homePageTitle = document.getElementById("home-page-title");
//"Web Developer on the homepage"
const homePageFooter = document.getElementById("home-page-footer");
const homePageContact = document.getElementById("home-page-contact");
const body = document.body;
console.log(mainContainer);

//button for small and big projects
const projectsBTN = document.getElementById("projects-btn");
//button to see github
const githubBTN = document.getElementById("github-btn");
//button to see about
const aboutBTN = document.getElementById("about-btn");
//button to see big or small projects
const bigProjectsBTN = document.getElementById("big-projects-btn");
const smallProjectsBTN = document.getElementById("small-projects-btn");
//buttons to see each individual project
const bigProjectBTN1 = document.getElementById("project1");
const bigProjectBTN2 = document.getElementById("project2");
const bigProjectBTN3 = document.getElementById("project3");
const smallProjectBTN1 = document.getElementById("small-project1");
const smallProjectBTN2 = document.getElementById("small-project2");
const smallProjectBTN3 = document.getElementById("small-project3");
const smallProjectBTN4 = document.getElementById("small-project4");

//functions that add and remove classes, causing the animations
projectsBTN.addEventListener("click", () => {
  projectsBTN.style.opacity = 0;
  githubBTN.style.opacity = 0;
  aboutBTN.style.opacity = 0;
  body.classList.add("projects-style");
  homePageTitle.classList.add("hide");
  homePageFooter.classList.add("hide");
  homePageContact.classList.add("hide-contact");
  LinkedInIcon.classList.add("hide-li-icon");
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
  homePageContact.classList.remove("hide-contact");
  LinkedInIcon.classList.remove("hide-li-icon");
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
  homePageContact.classList.add("hide-contact");
  LinkedInIcon.classList.add("hide-li-icon");
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
  homePageContact.classList.remove("hide-contact");
  LinkedInIcon.classList.remove("hide-li-icon");
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
  homePageContact.classList.add("hide-contact");
  LinkedInIcon.classList.add("hide-li-icon");
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
  homePageContact.classList.remove("hide-contact");
  LinkedInIcon.classList.remove("hide-li-icon");
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
  bigProjectBTN1.classList.add("animate-big-btn-1");
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
  bigProjectBTN1.classList.remove("animate-big-btn-1");
});

bigProjectBTN2.addEventListener("click", () => {
  bigProjectBTN1.style.opacity = 0;
  bigProjectBTN3.style.opacity = 0;
  body.classList.add("big-project-style2");
  backArrowBigProjects.classList.remove("big");
  backArrowBigProject2.classList.add("big-project2");
  console.log("working");
  bigProjectBTN2.classList.add("animate-big-btn-2");
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
  bigProjectBTN2.classList.remove("animate-big-btn-2");
});

bigProjectBTN3.addEventListener("click", () => {
  bigProjectBTN1.style.opacity = 0;
  bigProjectBTN2.style.opacity = 0;
  body.classList.add("big-project-style3");
  backArrowBigProjects.classList.remove("big");
  backArrowBigProject3.classList.add("big-project3");
  console.log("working");
  bigProjectBTN3.classList.add("animate-big-btn-3");
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
  bigProjectBTN3.classList.remove("animate-big-btn-3");
});

smallProjectBTN1.addEventListener("click", () => {
  smallProjectBTN2.style.opacity = 0;
  smallProjectBTN3.style.opacity = 0;
  smallProjectBTN4.style.opacity = 0;
  body.classList.add("small-project-style1");
  backArrowSmallProjects.classList.remove("small");
  backArrowSmallProject1.classList.add("small-project1");
  console.log("working");
  smallProjectBTN1.classList.add("animate-small-btn-1");
  mainContainer.classList.remove("small-projects-style");
  mainContainer.classList.add("small-project-style1");
  smallProjectContainer1.classList.add("show-small-project");
  console.log("done");
});

backArrowSmallProject1.addEventListener("click", () => {
  smallProjectBTN2.style.opacity = 1;
  smallProjectBTN3.style.opacity = 1;
  smallProjectBTN4.style.opacity = 1;
  body.classList.remove("small-project-style1");
  body.classList.add("small-projects-style");
  smallProjectContainer1.classList.remove("show-small-project");
  backArrowSmallProject1.classList.remove("small-project1");
  backArrowSmallProject1.classList.add("small");
  mainContainer.classList.remove("small-project-style1");
  mainContainer.classList.add("small-projects-style");
  smallProjectBTN1.classList.remove("animate-small-btn-1");
});

smallProjectBTN2.addEventListener("click", () => {
  smallProjectBTN1.style.opacity = 0;
  smallProjectBTN3.style.opacity = 0;
  smallProjectBTN4.style.opacity = 0;
  body.classList.add("small-project-style2");
  backArrowSmallProjects.classList.remove("small");
  backArrowSmallProject2.classList.add("small-project2");
  console.log("working");
  smallProjectBTN2.classList.add("animate-small-btn-2");
  mainContainer.classList.remove("small-projects-style");
  mainContainer.classList.add("small-project-style2");
  smallProjectContainer2.classList.add("show-small-project");
  console.log("done");
});

backArrowSmallProject2.addEventListener("click", () => {
  smallProjectBTN1.style.opacity = 1;
  smallProjectBTN3.style.opacity = 1;
  smallProjectBTN4.style.opacity = 1;
  body.classList.remove("small-project-style2");
  body.classList.add("small-projects-style");
  smallProjectContainer2.classList.remove("show-small-project");
  backArrowSmallProject2.classList.remove("small-project2");
  backArrowSmallProject2.classList.add("small");
  mainContainer.classList.remove("small-project-style2");
  mainContainer.classList.add("small-projects-style");
  smallProjectBTN2.classList.remove("animate-small-btn-2");
});

smallProjectBTN3.addEventListener("click", () => {
  smallProjectBTN1.style.opacity = 0;
  smallProjectBTN2.style.opacity = 0;
  smallProjectBTN4.style.opacity = 0;
  body.classList.add("small-project-style3");
  backArrowSmallProjects.classList.remove("small");
  backArrowSmallProject3.classList.add("small-project3");
  console.log("working");
  smallProjectBTN3.classList.add("animate-small-btn-3");
  mainContainer.classList.remove("small-projects-style");
  mainContainer.classList.add("small-project-style3");
  smallProjectContainer3.classList.add("show-small-project");
  console.log("done");
});

backArrowSmallProject3.addEventListener("click", () => {
  smallProjectBTN1.style.opacity = 1;
  smallProjectBTN2.style.opacity = 1;
  smallProjectBTN4.style.opacity = 1;
  body.classList.remove("small-project-style3");
  body.classList.add("small-projects-style");
  smallProjectContainer3.classList.remove("show-small-project");
  backArrowSmallProject3.classList.remove("small-project3");
  backArrowSmallProjects.classList.add("small");
  mainContainer.classList.remove("small-project-style3");
  mainContainer.classList.add("small-projects-style");
  smallProjectBTN3.classList.remove("animate-small-btn-3");
});

smallProjectBTN4.addEventListener("click", () => {
  smallProjectBTN1.style.opacity = 0;
  smallProjectBTN2.style.opacity = 0;
  smallProjectBTN3.style.opacity = 0;
  body.classList.add("small-project-style4");
  backArrowSmallProjects.classList.remove("small");
  backArrowSmallProject4.classList.add("small-project4");
  console.log("working");
  smallProjectBTN4.classList.add("animate-small-btn-4");
  mainContainer.classList.remove("small-projects-style");
  mainContainer.classList.add("small-project-style4");
  smallProjectContainer4.classList.add("show-small-project");
  console.log("done");
});

backArrowSmallProject4.addEventListener("click", () => {
  smallProjectBTN1.style.opacity = 1;
  smallProjectBTN2.style.opacity = 1;
  smallProjectBTN3.style.opacity = 1;
  body.classList.remove("small-project-style4");
  body.classList.add("small-projects-style");
  smallProjectContainer4.classList.remove("show-small-project");
  backArrowSmallProject4.classList.remove("small-project4");
  backArrowSmallProjects.classList.add("small");
  mainContainer.classList.remove("small-project-style4");
  mainContainer.classList.add("small-projects-style");
  smallProjectBTN4.classList.remove("animate-small-btn-4");
});
