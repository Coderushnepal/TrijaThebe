var ball = document.createElement("div");
ball.style.backgroundColor = "red";
ball.style.position = "absolute";
ball.style.height = "100px";
ball.style.width = "100px";
ball.style.borderRadius = "50%";
ball.style.top = "200px";
ball.style.left = "200px";
var box = document.getElementById("box1");
box.appendChild(ball);
var interval;
var direction = 1;
ball.addEventListener("click", function () {
  interval = setInterval(function () {
    var currentTop = ball.style.top;
    var nextTop = parseInt(currentTop) + 10 * direction;
    ball.style.top = nextTop + "px";
    if (nextTop >= 750 || nextTop <= 100) {
      direction *= -1;
    }
  }, 10000 / 60);
});
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  clearInterval(interval);
});