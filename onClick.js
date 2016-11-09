/**
 * Created by mason.roberts491 on 11/2/16.
 */
//

var colors =
    ["red","black","blue","blue","yellow"];
var scores =
    [10,10,-5,-5,-1];
var Y;
var score = 0;

function spin() {
    var x = document.getElementById("mytable").getElementsByTagName();
    x[0].style.backgroundColor="color#b";
    x[0].style.color="";
    Y = Math.round(Math.random()*4);
    x[0].style.backgroundColor = colors[Y];
    score += scores[Y];
}

function spin(nr) {
    var erick = "color"+nr;
    Y = Math.round(Math.random()*4);
    document.getElementById(erick).style.backgroundColor = colors[Y];
    score = score + scores[Y];
    document.getElementById("score").textContent = "score:" +score;
}

function spins(G) {
    for(var H = 1; H <= G; H++){
        spin(H);
    }
}


window.onload = function () {
  spin;
};
