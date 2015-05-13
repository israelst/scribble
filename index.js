var d3 = require("d3");

function M(x, y){
    return "M" + x + "," + y;
}

function l(x, y){
    return "l" + x + "," + y;
}

function scribble(){
    var commands = [M(0, 20)];
    for(var i = 0; i <= 8; i++){
        commands.push(l(10, -20));
        commands.push(l(-5, 20));
    }
    console.log(commands);
    return commands.join(" ");
}

window.addEventListener("load", function(){
    d3.select("svg")
        .append("path")
        .attr("d", scribble());
});


