const colors = ["orange", "red", "green", "purple", "#885df1"];
//selecting elements with the id and class//
const button = document.getElementById("button-id");
const color = document.querySelector(".color");

//when a user clicks the click me butteon it should call the function//
button.addEventListener("click", function () {
  // get a random number between 0 - 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

//function that generates a random number and then we use float so we can get the lowest number//
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
