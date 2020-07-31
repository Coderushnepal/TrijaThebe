var bounce = document.createElement("div");
var boundary = document.getElementById("box");

var width = boundary.clientWidth;
var height = boundary.clientHeight;


function generateBounce() {
    var bounce = document.createElement("div");
    var boundary = document.getElementById("box");

    boundary.appendChild(bounce);
    
    // console.log(bounce);    
    bounce.style.backgroundColor = "blue";
    bounce.style.height = "30px";
    bounce.style.width = "30px";
    bounce.style.borderRadius = "50%";
    bounce.style.position = "absolute";

    bounce.style.top = Math.random() * (height - 30) + "px";
    bounce.style.left = Math.random() * (width - 30) + "px";

    // console.log(bounce); 
    bounce.addEventListener('click', function () {
        var direction = 1;

        setInterval(function () {
            var newBounceTopValue = bounce.style.top;
            var nextTopValue = parseInt(newBounceTopValue) + 10 * direction; 
            bounce.style.top = nextTopValue + "px";
            if ((nextTopValue >= (height-30)) || (nextTopValue <=0))
            {
                direction *= -1; 
            }
        }, 1000 / 60);
    
    });
}