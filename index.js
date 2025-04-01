const container = document.getElementById("Glist");
const button = document.createElement("button");
button.textContent = "Click me!";
button.addEventListener("click", function() {
    alert("button clicked!");
});
 container.appendChild(button);

button.addEventListener("click", function() {
    alert("button clicked!");
});
button.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            alert("Enter key pressed!");
        }
    });
button.addEventListener("mouseover", function() {
    alert("button hovered!");
});