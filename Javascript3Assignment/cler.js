// Constructor function for Person objects

function game(home, away, homeScore, awayScore)
{
    this.home = home;
    this.away = away ;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.getSummary = function()
    {
      return [this.home, this.homeScore, this.away, this.awayScore];
    };
}
function getRand()
{
  var rand = Math.floor(Math.random() * Math.floor(20)) + 70;
  return rand;
}


var game1 = new game("sluh", "vianney", getRand(), getRand());
var game2 = new game("sluh", "chaminade", getRand(), getRand());
var game3 = new game("sluh", "priory", getRand(), getRand());
var game4 = new game("sluh", "de smet", getRand(), getRand());
var game5 = new game("sluh", "lindbergh", getRand(), getRand());
var game6 = new game("sluh", "cbhs", getRand(), getRand());

var games = [game1, game2, game3, game4, game5, game6];

var el1 = document.getElementById("demo1");
var el2 = document.getElementById("demo2");
var el3 = document.getElementById("demo3");
var el4 = document.getElementById("demo4");
var el5 = document.getElementById("demo5");
var el6 = document.getElementById("demo6");

var els = [el1, el2, el3, el4, el5, el6];

for (i = 0; i < 6; i++)
{
  els[i].textContent = games[i].getSummary();

}
