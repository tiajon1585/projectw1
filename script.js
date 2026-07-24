window.onload = function () {

    let projectCount = 3;

    let universityResources = document.getElementById("universityResources");
    let personalProjects = document.getElementById("personalProjects");

    if (projectCount < 3) {
        universityResources.style.display = "block";
        personalProjects.style.display = "block";
    } else {
        universityResources.style.display = "none";
        personalProjects.style.display = "block";
    }

    // Skills Array and Loop
    const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];

    const skillsList = document.getElementById("skillsList");

    skills.forEach(function(skill) {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
});

    const projects = [
    {
        title: "Storefront Website",
        summary: "A storefront website created using HTML and CSS that demonstrates page layout, navigation, and styling.",
        image: "images/storefront.png",
        repository: "https://github.com/tiajon1585/3.10-midterm/blob/main/storefront.html"
    },
    {
        title: "Blog Project",
        summary: "A blog webpage developed as a final performance assessment using HTML and CSS.",
        image: "https://placehold.co/300x200?text=Blog+Project",
        repository: "https://github.com/tiajon1585/Final-Performance-Assessment/blob/main/blog.html"
    },
    {
        title: "Personal Portfolio",
        summary: "My personal portfolio website showcasing my projects, skills, and contact information.",
        image: "https://placehold.co/300x200?text=Portfolio",
        repository: "https://github.com/tiajon1585/tiajon1585.github.io/blob/main/index.html"
    }
];
    if (sessionStorage.getItem("projects") === null) {

    sessionStorage.setItem("projects", JSON.stringify(projects));

}

    const projectsContainer =
document.getElementById("projectsContainer");

storedProjects.forEach(function(project) {

    const card = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const summary = document.createElement("p");
    summary.textContent = project.summary;

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.title;

    const link = document.createElement("a");
    link.href = project.repository;
    link.textContent = "View Repository";
    link.target = "_blank";

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(summary);
    card.appendChild(link);

    projectsContainer.appendChild(card);

});
const storedProjects =
JSON.parse(sessionStorage.getItem("projects"));

    // Dynamically add a new project paragraph
const newProject = document.createElement("p");
newProject.textContent =
    "Recent Project: I created a personal portfolio website using HTML, CSS, and JavaScript.";

document.getElementById("projects").appendChild(newProject);

    // Modify existing elements
document.querySelector("#about h2").textContent = "About Tiara";

document.getElementById("featured").style.backgroundColor = "#f0f8ff";

// dark mode
    const darkModeToggle = document.getElementById("darkModeToggle");

// Load saved preference
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

// Save preference when changed
darkModeToggle.addEventListener("change", function () {

    if (darkModeToggle.checked) {

        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");

    } else {

        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");

    }

});

   const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formStatus.textContent = "Sending message...";

    setTimeout(function () {

        const name = document.getElementById("name").value;

        formStatus.textContent =
            "Thank you, " + name + "! Your message has been sent Successfully!";

    }, 2500);

});


const modal = document.getElementById("welcomeModal");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});
};
