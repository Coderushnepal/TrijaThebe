var bounce = document.createElement("div");
var boundary = document.getElementById("box");

var width = boundary.clientWidth;
var height = boundary.clientHeight;


// console.log(width);
// console.log(height);

function generateBounce() {
    var bounce = document.createElement("div");
    var boundary = document.getElementById("box");

    boundary.appendChild(bounce);
    
    // console.log(bounce);    
    bounce.style.backgroundColor = "violet";
    bounce.style.height = "30px";
    bounce.style.width = "30px";
    bounce.style.borderRadius = "50%";
    bounce.style.position = "absolute";

    bounce.style.top = Math.random() * (height - 30) + "px";
    bounce.style.left = Math.random() * (width - 30) + "px";

    // console.log(bounce);
    
}