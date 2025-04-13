var canvas = document.getElementById("starfield");

// get dimensions of body element
var w = document.body.offsetWidth;
var h = document.body.offsetHeight;

// detect device pixel ratio
if (window.devicePixelRatio) {
  var dpr = window.devicePixelRatio;

  // set dimensions of the canvas element to match the body
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";

  // adjust width and height variables according to the detected pixel ratio
  w = w * dpr;
  h = h * dpr;
}

// set drawing dimensions of canvas: if the pixel ratio is 1, this will match
// the size of the canvas element, but if it's higher (common values will be 2
// and 3), the canvas will allow for more detail (matching the physical pixels
// of the device but not the virtual pixels of the page)
canvas.setAttribute("width", w);
canvas.setAttribute("height", h);

// prepare a two-dimensional drawing context
var c = canvas.getContext("2d");

// randomness generator
rand = function() {
  return (Math.random() - 0.5) * (Math.random() - 0.5) * Math.random();
};

// compute center
var cx = w / 2;
var cy = h / 2;

// randomly generate stars around center
var count = 170;
var stars = [];
for (var i = 0; i < count; i++) {
  var sx = cx + rand() * w;
  var sy = cy + rand() * h;
  var s = [sx, sy];
  stars.push(s);
}

// main loop
var fps = 60;
setInterval(function() {
  c.clearRect(0, 0, w, h);

  // iterate over stars
  for (var i = 0; i < stars.length; i++) {
    var x = stars[i][0];
    var y = stars[i][1];

    // compute radius depending on euclidean distance from center
    var r = 0.005 * Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
    //var r = 0.005 * (Math.abs(x - cx) + Math.abs(y - cy));

    // draw star
    c.beginPath();
    c.arc(x, y, r, 0, 2 * Math.PI, false);
    c.fillStyle = "white";
    //var brightness = Math.random() * 255;
    //c.fillStyle = "rgb(" + brightness + "," + brightness + "," + brightness + ")";
    c.fill();

    // update star
    var nx = x + (x - cx) * 0.025;
    var ny = y + (y - cy) * 0.025;
    stars[i] = [nx, ny];

    // reset star if out of bounds
    if (x < -100 || x > w + 100 || y < -100 || y > h + 100) {
      x = cx + (rand() * w) / 10;
      y = cy + (rand() * w) / 10;
      stars[i] = [x, y];
    }
  }
}, 1000 / fps);
