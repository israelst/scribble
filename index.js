var d3 = require("d3");


function M(x, y){
    return "M" + x + "," + y;
}

function L(x, y){
    return "L" + x + "," + y;
}

function scribble(width, height){
    var commands = [M(0, height)],
        x = 0,
        y = 0,
        incX = 0,
        inc = 0;
    for(var i = 0; i <= width - 12; i += 5){
        inc = Math.random() * height * 0.3;
        y = height * 0.7 + inc;

        x = i + 12;
        incX = Math.random() * 4 - 2;

        commands.push(L(x, height - y));
        commands.push(L(x - 7 + incX, y));
    }
    commands.push(L(width, 0));

    console.log(commands);
    return commands.join(" ");
}

window.addEventListener("load", function(){
    var width = 100,
        height= 24;

    d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("path")
        .attr("d", scribble(width, height));
});


