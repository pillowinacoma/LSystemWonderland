//global init variables
var animating = true;
var BG_COLOR = 51;
var TITLE1_TRANSPARENCY = 0;
var keyValue;
//motion
var bigW,bigH;
var zoom = 1;
//global L-system variables
var axiom,nbRep = 0;
var initAngle = 0;
var alpha = 90;
var dist = 50;
var rules;
var nbRep;
var grammar,turtle;
/*
float alpha;
float d;
float x0;
float y0;
float h0;*/

function setup(){
	var screen = createCanvas(2*windowWidth/3,windowHeight);
	screen.parent("header");
	background(BG_COLOR);
	initKochSnowflake();
	grammar = new Grammar(axiom);
	bigW = width/2;
	bigH = height/2;
}
function draw(){
	scale(zoom);
	translate(bigW,bigH);
}
function generate(){
	for (var i = 0; i < rules.length; i++) {
		grammar.addRule(rules[i].charAt(0),rules[i].substring(3));
	}
	grammar.applyRules();

	createP(grammar.word);
	turtle = new Turtle(dist,radians(alpha));
	turtle.drawSys(grammar.word);
}
class Turtle{
	constructor(stepLength,rotationAngle){
		this._stepLength = stepLength;
		this._rotationAngle = rotationAngle;
	}
	get stepLength(){
		return _stepLength;
	}
	get rotationAngle(){
		return _rotationAngle;
	}
	set stepLength(stepLength){
		this._stepLength = stepLength;
	}
	set rotationAngle(rotationAngle){
		this._rotationAngle = rotationAngle;
	}
	drawSys(word){
		var colors = Array(color(255,255,255),color(255,0,0),color(255,127,0),color(255,255,0),color(0,255,0),color(0,0,255),color(75,0,130),color(143,0,255));
		var stepColor = 0;
		background(BG_COLOR);
		stroke(colors[stepColor]);			//this way we can draw lines in a variation of colors
		var len = this._stepLength;

		for(var i = 0 ; i < word.length ; i++){
			 var c = word.charAt(i);
				if (c == 'f') {				//move one step and draw a line
			      line(0, 0, 0, -len);
			      translate(0, -len);
			    } else if (c == 'F') {		//invisible step
			      translate(0, -len);
			    } else if (c == '+') {		//turn "right" by rotationAngle
			      rotate(this._rotationAngle);			
			    } else if (c == '-') {		//turn "left" by rotationAngle
			      rotate(-this._rotationAngle);
			    } else if (c == '[') {		//save current position
			      push();
			    } else if (c == ']') {		//return to the last saved position
			      pop();
			    } else if(c == '}'){		//set stepColor to next color
			    	if (stepColor < 7) {
			    		stepColor++;
			    	}
			    	else
			    		stepColor = 1;
			    } else if (c == '{') {		//set stepColor to previous color
			    	if (stepColor > 0) {
			    		stepColor--;
			    	}
			    	else
			    		stepColor = 7;
			    }
		}

	}
}
class Grammar{
	constructor(axiom){
		this._word = axiom;
		this._rules = new Array();
	}
	addRule(predec,succ){
		this._rules[predec] = succ;
	}
	applyRules(){
		var result = "";
		for (var i = 0; i < this._word.length; i++) {
			if(this._rules[this._word.charAt(i)] != null){
				result += this._rules[this._word.charAt(i)];
			}
			else{
				result += this._word.charAt(i);
			}
		}
		this._word = result;
	}
	get word(){
		return this._word;
	}
	get rules(){
		return this._rules;
	}
	set word(word){
		this._word = word;
	}
	set rules(rules){
		this._rules = rules;
	}
}
function mouseDragged(){
	bigW = mouseX;
	bigH = mouseY;
	turtle.drawSys(grammar.word);
}
function initKochSnowflake(){
	axiom = "f++f++f";
	rules = ["f->f-f++f-f"];
	dist = 2.8;
	alpha = 60;
}
function keyPressed() {
  if (keyCode === ENTER) {
    generate();
  }
  else if (keyCode === LEFT_ARROW) {if(keyIsPressed == true)bigW--;turtle.drawSys(grammar.word);}
  else if (keyCode === RIGHT_ARROW) {if(keyIsPressed == true)bigW++;turtle.drawSys(grammar.word);}
  else if (keyCode === UP_ARROW) {if(keyIsPressed == true)bigH--;turtle.drawSys(grammar.word);}
  else if (keyCode === DOWN_ARROW) {if(keyIsPressed == true)bigH++;turtle.drawSys(grammar.word);}
}
function mouseWheel(event) {
  zoom += 0.1 * event.delta;
  turtle.drawSys(grammar.word);
}