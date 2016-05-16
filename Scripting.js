var drawing = false;
var path, pathOfString,oldX,oldY,newX,newY;
var selected;
var tool = "draw";
var circle;
function myFunction() {
	
	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	  	if (xhttp.readyState == 4 && xhttp.status == 200) {
	  	document.getElementById("send_info.txt").innerHTML = xhttp.responseText;
	  	}
	  };
	var paper = Raphael("paper1", 820, 620);
	var background = paper.image("Board.jpg", 0,0,820,620);
	if(true){	
	var navigation = paper.set();
	navigation.push( 
	paper.rect(10,10,50,120,2),
	paper.rect(14,13,20,20,1),
	paper.rect(37,13,20,20,1),
	paper.rect(14,36,20,20,1),
	paper.rect(37,36,20,20,1)
	).data('name', '1');
	}
	navigation.attr({fill: "rgb(198,198,198)", 'fill-opacity': '1'});
	
	navigation.toFront();

	var line_start = function(){
		if (!mousedown){
			return;
		}
		newX = event.offsetX,
		newY = event.offsetY;
		pathString += 'l' + (newX - oldX) + ' ' + (newY - oldY);

		path.attr('path', pathString);
		oldX = newX;
		oldY = newY;
		path.toBack();
		background.toBack();
		xhttp.open("GET", "send_info.txt", true);
		xhttp.send();
		}
		

	var line_ends = function(){
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

	var box_move = function(){
		newX = event.offsetX - oldX,
		newY = event.offsetY - oldY;
		navigation.translate(newX, newY);
		box_start();
 	
	}
	
	var box_start = function(){
		oldX = event.offsetX,
		oldY = event.offsetY;
	}
	
	var change_to_circle = function(){
		background.undrag();
		background.drag(draw_circle, start_circle, expand_circle);
	}

	var expand_circle = function(){
		var circle_final = paper.ellipse(oldX, oldY, newX, newY);
	}
	var draw_circle = function(){
		
		//var selected = 
		console.log(paper.getById(circle));
		//selected.remove();
		newX = Math.abs(event.offsetX - oldX),
		newY = Math.abs(event.offsetY - oldY);
		circle = paper.ellipse(oldX, oldY, newX, newY);
	}

	var start_circle = function(){
		oldX = event.offsetX,
		oldY = event.offsetY;
		newX = Math.abs(event.offsetX - oldX),
		newY = Math.abs(event.offsetY - oldY);
		circle = paper.ellipse(oldX, oldY, newX, newY);
		
	}

	var change_to_line = function(){
		background.undrag();
		background.drag(line_start, draw_line, line_ends);
	}


	var change_to_delete = function(){
		background.undrag();
		background.drag(clear_selected)
	}

	var clear_selected = function(){
		newX = event.offsetX,
		newY = event.offsetY;		
		var selected = paper.getElementByPoint(newX, newY);
		if(selected != null){
		//selected.remove();
		console.log(selected);
		//selected.remove();
		}
	}


navigation.drag(box_move, box_start);
navigation[1].click(change_to_line);
navigation[2].click(change_to_circle);
navigation[3].click(change_to_delete);



background.drag(line_start, draw_line, line_ends);	

}

