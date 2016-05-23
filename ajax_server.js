var drawing = false;
var path, pathOfString,oldX,oldY,newX,newY;
var selected;
var tool = "draw";
var from_point = 0;
var old = "";
function writeitems() {

	var requests = function(){
	$.ajax({
		   type: "GET",
		   url: "logs.txt",
		   ifModified: true,
		   success: function(data){
		var line = data.split('\n');
		
		for(var i = from_point; i < line.length; i++ )
		{
		from_point = i;
			var action = line[i].split(' ');
		console.log(from_point);
		switch (action[1]) {
			case 'circle':
			circle = paper.ellipse(action[2], action[3], action[4], action[5]).attr({stroke: action[0]});
			break; 
			case 'square':
			square = paper.rect(action[2], action[3], action[4], action[5]).attr({stroke: action[0]});
			default:
			path = paper.path(line[i]).attr({stroke: action[0]});
			break;
		from_point = i;
		console.log(from_point);
		}}}

		})
	setTimeout(requests, 1000);
	}
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
setTimeout(requests, 100);
}
