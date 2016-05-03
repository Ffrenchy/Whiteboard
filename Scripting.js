var drawing = false;
var path, pathOfString,oldX,oldY,newX,newY;

function myFunction() {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  

// Creates canvas 320 × 200 at 10, 50
var img = new Image();

img.src = "Board.jpg";

	var paper = Raphael("paper1", 820, 620);

var background = paper.image("Board.jpg", 0,0,820,620);


var mousemoves = function(){
	if (!mousedown){
	return;
}
	newX = event.offsetX,
        newY = event.offsetY;
	pathString += 'l' + (newX - oldX) + ' ' + (newY - oldY);

	path.attr('path', pathString);
	oldX = newX;
	oldY = newY;
	

	background.mouseup(mousestops);
	}


var mousestops = function(){
	mousedown = false;
}

var clickHandler = function(){
mousedown = true;
	newX = event.offsetX,
        newY = event.offsetY;
	pathString = 'M' + newX + ' ' + newY + 'l0 0';

	path = paper.path(pathOfString);
	oldX = newX;
	oldY = newY;

	background.mousemove(mousemoves);
}
background.mousedown(clickHandler);

}

function drawingNow()
{

}

function drawImage(paper,coordX,coordY) {
	var coordX = event.pageX  ,
		coordY = event.pageY - 185;
		background.click = drawImage(paper,coordX,coordY) ;
// Creates circle at x = 50, y = 40, with radius 10
var circle = paper.circle(coordX, coordY, 2);
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f00");

// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");
}
