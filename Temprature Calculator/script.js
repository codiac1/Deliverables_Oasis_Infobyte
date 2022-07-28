let celsius = document.getElementById("celsius");
let fahrenheight = document.getElementById("fahrenheight");

function celToFahr() {
  let output = parseFloat(celsius.value) * (9 / 5) + 32;
  fahrenheight.value = parseFloat(output.toFixed(2));
}

function fahrTocel() {
  let output = (parseFloat(fahrenheight.value) - 32) * (5 / 9);
  celsius.value = parseFloat(output.toFixed(2));
  console.log(output);
}
