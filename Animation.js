var x = 50;
stroke("red");
function draw() {
  background("green");
  shape(200, x, 50, 200, 200, 200);
  if (x<400) {
    x = x+1;
  } else {
    while (x>0) {
      x = x-1;
    }
  }
}
