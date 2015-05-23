var d3 = require("d3");


function M(x, y){
    return "M" + x + "," + y;
}

function L(x, y){
    return "L" + x + "," + y;
}

function scribble(width, height, marginFactor, stepUp, stepDown){
    if(marginFactor === undefined){ marginFactor = 0.3; }
    stepUp = stepUp || 12;
    stepDown = stepDown || 7;

    var commands = [M(0, height)],
        stepDiff = Math.abs(stepUp - stepDown),
        y = 0,
        incX = 0,
        incY = 0;

    for(var i = 0; i <= width - Math.max(stepUp, stepDown); i += stepDown){
        incY = Math.random() * height * marginFactor;
        y = height * (1 - marginFactor) + incY;

        incX = Math.random() * stepDiff - stepDiff/2;

        commands.push(L(i + stepUp, height - y));
        commands.push(L(i + stepDown + incX, y));
    }

    commands.push(L(width, 0));
    return commands.join(" ");
}

function value(elementId){
    return +document.getElementById(elementId).value;
}

window.addEventListener("load", function(){
    var width = 100,
        height= 24,
        path = document.querySelector("#sandbox svg path");

    function draw(){
        var d = scribble(
           value("width"),
           value("height"),
           value("margin-factor"),
           value("step-up"),
           value("step-down")
        );
        path.setAttribute("d", d);
    }

    d3.selectAll("input").on("change", draw);
    draw();

    d3.select("header svg")
        .attr("width", width)
        .attr("height", height)
        .append("path")
        .attr("d", scribble(width, height));
});


