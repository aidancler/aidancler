//~blue~
function processX()
{
  this.textContent = "hello";
}

var element1 = document.getElementById("x");
element1.addEventListener('click', processX, false);

//~keydown!~
function processKeys(e)
{
    if (e.keyCode == "67")
    {
      zeroOut();
    }
}
function zeroOut()
{
  document.getElementById("demoX").innerHTML = "The mouse's X Coords are: 0";
  document.getElementById("demoY").innerHTML = "The mouse's Y Coords are: 0";
}
window.addEventListener('keydown', processKeys, false);

//~other keydown~
function processOtherKeys(e)
{
    if (e.keyCode != "67")
    {
      fakeOut();
    }
}
function fakeOut()
{
  document.getElementById("demoX").innerHTML = "Nice try Mr See, please press the 'C' key";
  document.getElementById("demoY").innerHTML = "Nice try Mr See, please press the 'C' key";
}
window.addEventListener('keydown', processOtherKeys, false);
//coordiantes
function showCoordsX(event)
{
    var x = event.clientX;

    var coordsX = "The mouse's X Coords are: " + x ;
    document.getElementById("demoX").innerHTML = coordsX;
}

function showCoordsY(event)
{

    var y = event.clientY;
    var coordsY = "The mouse's Y Coords are: " + y;
    document.getElementById("demoY").innerHTML = coordsY;
}

//~pink~
/*
function doY()
{
  this.textContent = "it works!";
}

var elemental = document.getElementById("y");
elemental.addEventListener('mouseover', doY, false);
*/

/*
//~orange~
function process2()
{
    this.setAttribute('class','thing2');
}

var yellow = document.getElementsByClassName("thing1");
yellow[0].addEventListener('click', process2, false);

//~black~
function processX()
{
    this.setAttribute('class','thingy2');
}

var gray = document.getElementsByClassName("thingy");
gray[0].addEventListener('click', processX, false);


//~keydown!~
function processKeys(myEvent)
{
    element3.textContent = myEvent.keyCode;
}

var element3 = document.getElementById("extraSpecial");
document.addEventListener('keydown', processKeys, false);

//~addition?!~
function process4(myInput)
{
    elements2[1].textContent = myInput + 17;
}

elements2[1].addEventListener('click', function(){procress4(5);}, false);
*/
