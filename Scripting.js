var drawing = false;
var path, pathOfString,oldX,oldY,newX,newY;
var selected;
var sending, place;
var background;
var tool = "draw";
var circle;
var square;
var colour = "black"
function myFunction() {
	
	var send_line = function(sending){
	 $.ajax({
		   type: "POST",
		   url: "../../server.php",
		   data: {  
		   			
					'data': sending,
					'location': place
				 },
		   dataType: "json",
		});
	}

	var img = document.getElementById('pic'); 

	var width = img.clientWidth;
	var height = img.clientHeight;
	if(width > 820 ){
	width = 820;
	}
	if(height > 620 ){
	height = 620;
	}

	console.log(width);
	var paper = Raphael("paper1", 820, 620);
	background = paper.image("../../Board.jpg", 0,0,820,620);
	var images  = window.location.href.split('/');
	var location_width = (820 - width)/2;
	var location_height = (620 - height)/2;
	var chosen_image = '/uploads/' + (images[images.length-2]) + '/' + (images[images.length-1]);
	var item = paper.image(chosen_image, location_width, location_height, width, height);
	place = 'uploads/logs/' + (images[images.length-2]) + (images[images.length-1]);
	place = place.replace('.','');
	place = place + 'log.txt';
	console.log(place);
	if(true){	
	var navigation = paper.set();
	navigation.push( 
	paper.rect(10,10,50,120,2).attr({fill: "rgb(198,198,198)", 'fill-opacity': '1'}),
	
	paper.rect(14,13,20,20,1),
	paper.image("../../uploads/pencil.png", 15, 14, 19, 19),
	paper.rect(37,13,20,20,1),
	paper.image("../../uploads/oval.png", 38, 14, 19, 19),
	paper.rect(14,36,20,20,1),
	paper.image("../../uploads/erase.png", 15, 37, 19, 19),
	paper.rect(37,36,20,20,1),
	paper.image("../../uploads/rectangle.png", 39, 37, 16, 18),
	paper.rect(14,59,20,20,1).attr({fill: "black"}),
	paper.rect(37,59,20,20,1).attr({fill: "white"}),
	paper.rect(14,82,20,20,1).attr({fill: "red"}),
	paper.rect(37,82,20,20,1).attr({fill: "blue"}),
	paper.rect(14,105,20,20,1).attr({fill: "green"}),
	paper.rect(37,105,20,20,1).attr({fill: "yellow"})
	).data('name', '1');
	}
	var selected = paper.getElementByPoint(100, 1000);

	
	navigation.toFront();
	send_line();

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
		path.toFront();
		navigation.toFront();
	}
		

	var line_ends = function(){
		mousedown = false;
		sending = (colour + ' ' + pathString + '\n');
		send_line(sending);
	}

	var draw_line = function(){
		mousedown = true;
		newX = event.offsetX,
		newY = event.offsetY;
		pathString = 'M' + newX + ' ' + newY + 'l0 0';
		path = paper.path(pathOfString);
		path.attr({stroke: colour})
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
		item.undrag();
		background.drag(draw_circle, start_circle, expand_circle);
		item.drag(draw_circle, start_circle, expand_circle);
	}

	var expand_circle = function(){
		circle.remove()	
		var circle_final = paper.ellipse(oldX, oldY, newX, newY).attr({stroke: colour});
		sending = (colour + ' circle ' + oldX + ' ' + oldY + ' ' + newX + ' ' + newY + '\n');
		send_line(sending);
		navigation.toFront();
	}
	var draw_circle = function(){
		circle.remove()	
		newX = Math.abs(event.offsetX - oldX),
		newY = Math.abs(event.offsetY - oldY);
		circle = paper.ellipse(oldX, oldY, newX, newY).attr({stroke: colour});
		navigation.toFront();
	}

	var start_circle = function(){	
		oldX = event.offsetX,
		oldY = event.offsetY;
		newX = Math.abs(event.offsetX - oldX),
		newY = Math.abs(event.offsetY - oldY);
		circle = paper.ellipse(oldX, oldY, newX, newY).attr({stroke: colour});
		navigation.toFront();
		
	}

	var change_to_line = function(){
		background.undrag();
		background.drag(line_start, draw_line, line_ends);
	}

var change_to_square = function(){
		background.undrag();
		item.undrag();
		background.drag(draw_square, start_square, expand_square);
		item.drag(draw_square, start_square, expand_square).attr({stroke: colour});
	}

	var expand_square = function(){
		square.remove()
		if(newX < oldX && newY < oldY){
			var square_final = paper.rect(newX, newY, (oldX - newX), (oldY - newY)).attr({stroke: colour});
			sending = (colour + ' square ' + newX + ' ' + newY + ' ' + (oldX - newX) + ' ' + (oldY - newY) + '\n');
		}
		else if(newX < oldX){
			var square_final = paper.rect(newX, oldY, (oldX - newX), (newY - oldY)).attr({stroke: colour});
			sending = (colour + ' square ' + newX + ' ' + oldY + ' ' + (oldX - newX) + ' ' + (newY - oldY) + '\n');
		}
		else if(newY < oldY){
			var square_final = paper.rect(oldX, newY, (newX - oldX), (oldY - newY)).attr({stroke: colour});
			sending = (colour + ' square ' + oldX + ' ' + newY + ' ' + (newX - oldX) + ' ' + (oldY - newY) + '\n');
		}
		else{
			var square_final = paper.rect(oldX, oldY, (newX - oldX), (newY - oldY)).attr({stroke: colour});
			sending = (colour + ' square ' + oldX + ' ' + oldY + ' ' + (newX - oldX) + ' ' + (newY - oldY) + '\n');
		}
		send_line(sending);
		navigation.toFront();
	}
	var draw_square = function(){
			
		newX = event.offsetX,
		newY = event.offsetY;
		square.remove()
		if(newX < oldX && newY < oldY){
			square = paper.rect(newX, newY, (oldX - newX), (oldY - newY)).attr({stroke: colour});
		}
		else if(newX < oldX){
			square = paper.rect(newX, oldY, (oldX - newX), (newY - oldY )).attr({stroke: colour});
		}
		else if(newY < oldY){
			square = paper.rect(oldX, newY, (newX - oldX), (oldY - newY)).attr({stroke: colour});
		}
		else{
			square = paper.rect(oldX, oldY, (newX - oldX), (newY - oldY)).attr({stroke: colour});
		}
		navigation.toFront();
	}

	var start_square = function(){	
		oldX = event.offsetX,
		oldY = event.offsetY;
		newX = Math.abs(event.offsetX - oldX),
		newY = Math.abs(event.offsetY - oldY);
		square = paper.rect(oldX, oldY, newX, newY).attr({stroke: colour});
		navigation.toFront();
	}
	var change_to_delete = function(){
		background.remove();
		if(path != null){
		path.remove();
		}		
		background = paper.image("Board.jpg", 0,0,820,620);
		navigation.toFront();
		//background.undrag();
		//background.click(clear_selected);
		//background.removeData("data");
		
	}

	var clear_selected = function(){
		newX = event.offsetX,
		newY = event.offsetY;		
		var selected = this.getElementByPoint(newX, newY);

		console.log(selected);
		if(selected != null){
		selected.remove();
		console.log(selected);
		//selected.remove();
		}
	}


	var change_to_black = function(){ colour = "black";}
	var change_to_white = function(){ colour = "white";}
	var change_to_red = function(){ colour = "red";}
	var change_to_blue = function(){ colour = "blue";}
	var change_to_green = function(){ colour = "green";}
	var change_to_yellow = function(){ colour = "yellow";}


navigation.drag(box_move, box_start);
navigation[1].click(change_to_line);
navigation[2].click(change_to_line);
navigation[3].click(change_to_circle);
navigation[4].click(change_to_circle);
navigation[5].click(change_to_delete);
navigation[6].click(change_to_delete);
navigation[7].click(change_to_square);
navigation[8].click(change_to_square);
navigation[9].click(change_to_black);
navigation[10].click(change_to_white);
navigation[11].click(change_to_red);
navigation[12].click(change_to_blue);
navigation[13].click(change_to_green);
navigation[14].click(change_to_yellow);

background.drag(line_start, draw_line, line_ends);	
item.drag(line_start, draw_line, line_ends);
}

