var colorsOne = ["red", "orange", "yellow", "green", "blue", "purple", "black"];


//////////////

var el = document.getElementById("first");
{
  var rand = colorsOne[Math.floor(Math.random(1) * colorsOne.length)];
  el.textContent = rand;
}

//////////////

var el2 = document.getElementById("second");
{
  var rand = colorsOne[Math.floor(Math.random(2) * colorsOne.length)];
  el2.textContent = rand;
}

//////////////

var el2 = document.getElementById("third");
{
  var rand = colorsOne[Math.floor(Math.random(3) * colorsOne.length)];
  el2.textContent = rand;
}

//////////////

var el2 = document.getElementById("fourth");
{
  var rand = colorsOne[Math.floor(Math.random(4) * colorsOne.length)];
  el2.textContent = rand;
}
