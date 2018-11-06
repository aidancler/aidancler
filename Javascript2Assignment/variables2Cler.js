var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);

function calcSum(a,b)
{
  return a + b;
}

function calcDiff(a,b)
{
  return a - b;

}

function calcProd(a,b)
{
  a * b;
}

function calcQuot(a,b)
{
  return a/b;
}

var ye = document.getElementById("sum");
{
  ye.textContent = "the sum of " + num1 + " and " + num2 + " is " + calcSum(num1,num2);
}
var ye = document.getElementById("diff");
{
  ye.textContent = "the difference of " + num1 + " and " + num2 + " is " + calcDiff(num1,num2);
}
var ye = document.getElementById("prod");
{
  ye.textContent = "the product of " + num1 + " and " + num2 + " is " + calcProd(num1,num2);
}
var ye = document.getElementById("quot");
{
  ye.textContent = "the quotient of " + num1 + " and " + num2 + " is " + calcQuot(num1,num2);
}
