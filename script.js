var userName = prompt("What is your name?");
var message = document.createElement("h2");
message.textContent = "Welcome, " + userName + "!";

document.body.insertBefore(message, document.body.firstChild);

window.onload = function () {

    // Featured content
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

    // Dark Mode
    const darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Contact Form
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        alert("Thank you, " + name + ", your message has been sent!");
    });

};
