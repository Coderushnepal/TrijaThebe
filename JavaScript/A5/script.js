var bounce = document.createElement("div");
var boundary = document.getElementById("box");

var width = boundary.clientWidth;
var height = boundary.clientHeight;

// console.log(width);
// console.log(height);
 

function generateBtn() {
    var bounce = document.createElement("div");
    var boundary = document.getElementById("box");
    var i = 0;
    bounce.id = i;

    boundary.appendChild(bounce);
   
    // console.log(bounce);    
    bounce.style.backgroundColor = "blue";
    bounce.style.height = "30px";
    bounce.style.width = "30px";
    bounce.style.borderRadius = "50%";
    bounce.style.position = "absolute";

    bounce.style.top = Math.random() * (height - 30) + "px";
    bounce.style.left = Math.random() * (width - 30) + "px";

        
        setInterval(
            (function() {
                var direction = 1;
                
            return  function () {
                var newBounceTopValue = bounce.style.top;
                var nextTopValue = parseInt(newBounceTopValue) + 10 * direction; 
                bounce.style.top = nextTopValue + "px";
                if ((nextTopValue >= (height-20)) || (nextTopValue <=0))
                {
                    direction *= -1; 
                }
            };

    }) (), 
    1000 / 60 
    );

    i++
   



}