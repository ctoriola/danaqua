var div = document.getElementById("myDiv");
var color = div.style.backgroundColor;

setInterval(function() {
  color = color.replace(/[^,]+(?=\))/, function(match) {
    return (parseFloat(match) + 0.14285714285).toFixed(2);
  });
  div.style.backgroundColor = color;
  if (color === "rgb(1, 1, 1)") {
    clearInterval(intervalId);
  }
}, 86400);