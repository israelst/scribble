var d3 = require("d3");


function M(x, y){
    return "M" + x + "," + y;
}

function l(x, y){
    return "l" + x + "," + y;
}

function scribble(width, height){
    var commands = [M(0, height)];
    for(var i = 0; i <= width; i += 5){
        commands.push(l(12, -height));
        commands.push(l(-7 + inc, height));
    }
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


