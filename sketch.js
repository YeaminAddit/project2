// Custom variable for the sun's color
let sunColor;

function setup() {
  createCanvas(800, 400); // Create a canvas of 800x400 pixels
  sunColor = color(255, 204, 0); // Initial color of the sun
}

function draw() {
  background(135, 206, 235); // Sky blue background

  // Ground
  fill(34, 139, 34); // Green grass color
  rect(0, height * 0.75, width, height * 0.25); // Draw ground rectangle

  // Sun
  fill(sunColor); // Set the sun color
  ellipse(width * 0.1, height * 0.2, 80, 80); // Draw the sun at the top-left corner

  // Mountain
  fill(139, 69, 19); // Brown color for mountain
  triangle(200, 300, 350, 100, 500, 300); // Mountain shape

  // Interactive element: cloud follows the mouse
  fill(255); // White clouds
  ellipse(mouseX, mouseY, 80, 50); // Main cloud body
  ellipse(mouseX - 30, mouseY - 10, 60, 40); // Left part of the cloud
  ellipse(mouseX + 30, mouseY - 10, 60, 40); // Right part of the cloud
}

function mousePressed() {
  // Change the sun's color randomly when the mouse is pressed
  sunColor = color(random(255), random(255), random(255));
}
