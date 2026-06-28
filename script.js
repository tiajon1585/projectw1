var userName = prompt("What is your name?");

var message = document.createElement("h2");
message.textContent = "Welcome, " + userName + "!";

document.body.insertBefore(message, document.body.firstChild);
