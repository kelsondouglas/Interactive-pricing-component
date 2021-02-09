//Global Variables
const range = document.querySelector("#input-range");
const display = document.querySelector("#display-value");

//Event Listeners
range.addEventListener("change", callChanges);
range.addEventListener("mousemove", callChanges);

//Functions
function callChanges() {
  changeBackgroundInputRange();

  //Change de display value
  const rangeValue = range.value;
  display.innerHTML = ` $${rangeValue}.00`;
}

function changeBackgroundInputRange() {
  let porcentage = Math.floor((range.value / 100) * 31 * 10);

  range.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${porcentage}%, hsl(223, 50%, 87%) ${porcentage}%)`;
  console.log(porcentage);
}
