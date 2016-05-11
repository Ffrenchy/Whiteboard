var drawing = false;
var path, pathOfString,oldX,oldY,newX,newY;
var selected;

function myFunction() {

	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
	      document.getElementById("demo").innerHTML = xhttp.responseText;
	    }
	  };
	var paper = Raphael("paper1", 820, 620);
	var background = paper.image("Board.jpg", 0,0,820,620);
	var navigation = paper.rect(10, 10, 50, 120, 2);
	navigation.attr({fill: "green"});

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
		}

	var mousestops = function(){
		mousedown = false;
	}

	var draw_line = function(){
		mousedown = true;
		newX = event.offsetX,
		newY = event.offsetY;
		pathString = 'M' + newX + ' ' + newY + 'l0 0';
		path = paper.path(pathOfString);
		oldX = newX;
		oldY = newY;
	}

	var selector = function(){
		newX = event.offsetX,
		newY = event.offsetY;
		selected = paper.getElementByPoint(newX, newY);
//	if (selected ==	paper.image){
	console.log(selected);
//	background.drag(mousemoves, draw_line, mousestops);
//	}
	}

//background.drag(mousemoves, draw_line, mousestops);
background.click(selector);

}

