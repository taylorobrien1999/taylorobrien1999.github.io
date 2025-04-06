// 1. Alert box connected to button
function showAlert() {
    alert("Thanks for clicking the button!");
}

// 2. Change style on hover
function addHoverEffect() {
    const box = document.getElementById("hover-box");
    if (!box) return;
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "#ffcc00";
        box.style.transform = "scale(1.1)";
    });
    
    box.addEventListener("mouseout", () => {
        box.style.backgroundColor = "#eee";
        box.style.transform = "scale(1)";
    });
}

// 3. Button to show number on screen
let counter = 0;
function incrementCounter() {
    counter++;
    document.getElementById("counter-display").textContent = counter;
}

// 4. Button that changes text colour
function toggleTextColor() {
    const text = document.getElementById("color-text");
    if (!text) return;
  
    if (text.style.color === "red") {
        text.style.color = "green";
    } else {
        text.style.color = "red";
    }
}

// 5. Loop to add 5 items to list when button is clicked
function generateListItems() {
    const list = document.getElementById("generated-list");
    list.innerHTML = ""; // Clear old items

    for (let i = 1; i <= 5; i++) {
        const li = document.createElement("li");
        li.textContent = "Item " + i;
        list.appendChild(li);
    }
}

// Run functions after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    // 1. Alert box connected to button
    document.getElementById("alert-button").addEventListener("click", showAlert);

    // 2. Hover effect
    addHoverEffect();

    // 3. Button to show number on screen
    document.getElementById("increment-button").addEventListener("click", incrementCounter);

    // 4. Button that changes text colour
    document.getElementById("color-button").addEventListener("click", toggleTextColor);

    // 5. Loop to add 5 items to list
    document.getElementById("generate-list-button").addEventListener("click", generateListItems);
});


