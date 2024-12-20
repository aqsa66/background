// List of random colors
const colors = [
    "#FF5733", // Orange
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FF33A1", // Pink
    "#F1C40F", // Yellow
    "#8E44AD", // Purple
    "#E67E22", // Orange Dark
    "#1ABC9C", // Teal
    "#2ECC71", // Light Green
    "#E74C3C", // Red
    "#3498DB", // Light Blue
    "#9B59B6", // Violet
    "#34495E", // Dark Grey
    "#16A085", // Sea Green
    "#D35400"  // Burnt Orange
];

// Reference to the button
const colorButton = document.getElementById("colorButton");

// Function to change background color
function changeBackgroundColor() {
    // Generate a random index from the colors array
    const randomIndex = Math.floor(Math.random() * colors.length);
    // Set the background color of the body
    document.body.style.backgroundColor = colors[randomIndex];
}

// Add click event listener to the button
colorButton.addEventListener("click", changeBackgroundColor);
