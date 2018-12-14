//sem2.js is just so I dont have to cram everything on one file.
//


$(document).ready(function(){
    $(".buttonSport").click(function(){
        $(".buttonFootball").slideToggle("slow");
        $(".buttonRugby").slideToggle("slow");
        $(".buttonHockey").slideToggle("slow");
        $(".buttonLax").slideToggle("slow");
    });
});

$(document).ready(function()
{
        $(".Eggs").hide();
        $(".Almonds").hide();
        $(".Chicken").hide();
        $(".Yogurt").hide();
        $(".Olive").hide();
        $(".Granola").hide();
        $(".soda").hide();
        $(".candy").hide();
        $(".donut").hide();
        $(".hotdog").hide();
        $(".chips").hide();
        $(".bacon").hide();
});



//healthies

$(document).ready(function(){
    $("#EggsL").click(function()
    {
        $(".Eggs").show();
        healthCount();
        $(".healthyFood").html("There are this many healthy foods " + healthyFoodCounter);
    });
});

$(document).ready(function(){
    $("#AlmondsL").click(function()
    {
        $(".Almonds").show();
        healthCount();
        $(".healthyFood").html("There are this many healthy foods " + healthyFoodCounter);
    });
});

$(document).ready(function(){
    $("#ChickenL").click(function()
    {
        $(".Chicken").show();
        healthCount();
        $(".healthyFood").html("There are this many healthy foods " + healthyFoodCounter);
    });
});

$(document).ready(function(){
    $("#YogurtL").click(function()
    {
        $(".Yogurt").show();
        healthCount();
        $(".healthyFood").html("There are this many healthy foods " + healthyFoodCounter);
    });
});

$(document).ready(function(){
    $("#OliveL").click(function()
    {
        $(".Olive").show();
        healthCount();
        $(".healthyFood").html("There are this many healthy foods " + healthyFoodCounter);
    });
});
$(document).ready(function(){
    $("#GranolaL").click(function()
    {
        $(".Granola").show();
        healthCount();
        $(".healthyFood").html("There are this many healthy foods " + healthyFoodCounter);
    });
});

//unhealthies


$(document).ready(function(){
    $("#SodaL").click(function()
    {
        $(".soda").show();
        unhealthCount();
        $(".unhealthyFood").html("There are this many unhealthy foods " + unhealthyFoodCounter);
    });
});

$(document).ready(function(){
    $("#CandyL").click(function()
    {
        $(".candy").show();
        unhealthCount();
        $(".unhealthyFood").html("There are this many unhealthy foods " + unhealthyFoodCounter);
    });
});

$(document).ready(function(){
    $("#DonutL").click(function()
    {
        $(".donut").show();
        unhealthCount();
        $(".unhealthyFood").html("There are this many unhealthy foods " + unhealthyFoodCounter);
    });
});

$(document).ready(function(){
    $("#HotdogL").click(function()
    {
        $(".hotdog").show();
        unhealthCount();
        $(".unhealthyFood").html("There are this many unhealthy foods " + unhealthyFoodCounter);
    });
});

$(document).ready(function(){
    $("#ChipsL").click(function()
    {
        $(".chips").show();
        unhealthCount();
        $(".unhealthyFood").html("There are this many unhealthy foods " + unhealthyFoodCounter);
    });
});

$(document).ready(function(){
    $("#BaconL").click(function()
    {

        $(".bacon").show();
        unhealthCount();
        $(".unhealthyFood").html("There are this many unhealthy foods " + unhealthyFoodCounter);

    });
});



//display

var healthyFoodCounter = 0;
var unhealthyFoodCounter = 0;

function healthCount()
{
  healthyFoodCounter += 1;
}

function unhealthCount()
{
  unhealthyFoodCounter += 1;
}

$(document).ready(function()
{

    $(".healthyFood").html("There are this many healthy foods on the list" + healthyFoodCounter + ".");
    $(".unhealthyFood").html("There are this many unhealthy foods on the list" + unhealthyFoodCounter + ".");
});
