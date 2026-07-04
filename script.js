var userName = prompt("What is your name?");

var message = document.createElement("h2");
message.textContent = "Welcome, " + userName + "!";

document.body.insertBefore(message, document.body.firstChild);

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

};
