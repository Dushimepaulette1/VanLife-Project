const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//selecting elements with the id and class//
const button = document.getElementById("button-id");
const color = document.querySelector(".color");

//when a user clicks the click me button it should call the function
button.addEventListener("click", function () {
  // In each iteration of the loop, getRandomNumber() runs first, generating a random number. This number is then used to select a character from the hex array, which is added to the hexColor string.
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    //runs until the numbers are 6
    hexColor += hex[getRandomNumber()];
  }
  //changing the content of the element which has a class of "color"
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
//generates a random number then ex: hex[10]
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
