window.onload = function ()
// I removed the prompt() that was here
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

    // Dynamically add a new project paragraph
const newProject = document.createElement("p");
newProject.textContent =
    "Recent Project: I created a personal portfolio website using HTML, CSS, and JavaScript.";

document.getElementById("projects").appendChild(newProject);

    // Modify existing elements
document.querySelector("#about h2").textContent = "About Tiara";

document.getElementById("featured").style.backgroundColor = "#f0f8ff";
    
    const darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
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
};
