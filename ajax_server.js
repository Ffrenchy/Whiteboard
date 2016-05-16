var drawing = false;
var path, pathOfString,oldX,oldY,newX,newY;
var selected;
var tool = "draw";
function writeitems() {

	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
	      document.getElementById("send_info.txt").innerHTML = xhttp.responseText;
		var circle_final = paper.ellipse(100, 100, 25, 25);
		}
	  };
	var paper = Raphael("paper1", 820, 620);
	var background = paper.image("Board.jpg", 0,0,820,620);

	var line_start = function(startX, startY, endX, endY){
		if (!mousedown){
			return;
		}
		pathString += 'l' + (newX - oldX) + ' ' + (newY - oldY);

		path.attr('path', pathString);
		oldX = newX;
		oldY = newY;
		path.toBack();
		background.toBack();
		}
		

	var line_ends = function(){
		mousedown = false;
	}

	var draw_line = function(){
		newX = event.offsetX,
		newY = event.offsetY;
		pathString = 'M' + newX + ' ' + newY + 'l0 0';
		path = paper.path(pathOfString);
		oldX = newX;
		oldY = newY;
	}


}
