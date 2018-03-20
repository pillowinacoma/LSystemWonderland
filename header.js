var angle = 0;
var BG_COLOR = 51;
var fontAstronBoy,fontAstronBoyWonder,fontAstronBoyItalic,fontAstronBoyVideo,fontDolphins;
var HEAD_TRANSPARENCY = 0;
var white_color, peach_color, blue_color, lightBlue_color;
	

function preload() {
	fontAstronBoyWonder = loadFont("astron boy wonder.ttf");
	fontAstronBoyItalic = loadFont("astron boy italic.ttf");
	fontAstronBoyVideo = loadFont("astron boy video.ttf");
	fontAstronBoy = loadFont("astron boy.ttf");
	fontDolphins = loadFont("dolphins.ttf");
}


function setup() {
	var head = createCanvas(750,200);
	head.parent('header');
	background(BG_COLOR);
	white_color = color(255,255,255);
	blue_color = color(78,128,152);
	peach_color = color(239,131,84);
	lightBlue_color = color(206,38,91);
}


function draw(){
	translate(width/2,height/2);
	//triangle1-----------------------------------------
	push();
	noStroke();
	rotate(angle);
	fill(blue_color);
	triangle(0,0,-width,-width,0,-width);
	pop();

	//triangle2-----------------------------------------
	push();
	noStroke();
	rotate(angle);
	fill(white_color);
	triangle(0,0,-width,-width,-width,0);
	pop();

	//triangle3-----------------------------------------
	push();
	noStroke();
	rotate(angle);
	fill(blue_color);
	triangle(0,0,-width,0,-width,width);
	pop();

	//triangle4-----------------------------------------
	push();
	noStroke();
	rotate(angle);
	fill(white_color);
	triangle(0,0,-width,width,0,width);
	pop();
	//triangle5-----------------------------------------
	push();
	noStroke();
	rotate(angle);
	fill(blue_color);
	triangle(0,0,0,width,width,width);
	pop();
	//triangle6-----------------------------------------
	push();
	noStroke();
	rotate(angle);
	fill(white_color);
	triangle(0,0,width,0,width,width);
	pop();
	//triangle7-----------------------------------------
	push();
	noStroke();
	rotate(angle);
	fill(blue_color);
	triangle(0,0,width,0,width,-width);
	pop();
	//triangle8-----------------------------------------
	push();
	noStroke();
	rotate(angle);
	fill(white_color);
	triangle(0,0,0,-width,width,-width);
	pop();
	//text----------------------------------------------
	push();
	translate(-75,50);
	textSize(120);
	textFont(fontDolphins);
	textAlign(CENTER);
	fill(239,131,84,HEAD_TRANSPARENCY);
	strokeWeight(4);
	stroke(lightBlue_color);
	text("L-System",0,-40);
	text("Wonderland",120,20);
	if(HEAD_TRANSPARENCY < 255)HEAD_TRANSPARENCY += 1.5;
	pop();

	push();
	translate(-width/2,-height/2);
	noFill();
	strokeWeight(4);
	stroke(blue_color);
	rect(0,0,width,height)
	pop();

	angle += 0.01;
}
