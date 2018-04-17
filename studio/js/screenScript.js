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
var rules = [];
var nbRep;
var grammar,turtle;

function setup(){
	var screen = createCanvas(2*windowWidth/3,windowHeight);
	screen.parent("header");
	//screen.mouseOver(mouseWheel);
	background(BG_COLOR);
	initGosperCurve();
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
				if (c == 'F') {				//move one step and draw a line
			      line(0, 0, 0, -len);
			      translate(0, -len);
			    } else if (c == 'f') {		//invisible step
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
	bigW -= (width/2- mouseX)/100;
	bigH -= (height/2- mouseY)/100;
	turtle.drawSys(grammar.word);
	return false;
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
	if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height ){
	  zoom += 0.01 * event.delta;
	  turtle.drawSys(grammar.word);
	}
}
//------------------------------------------------------------------------------------------------------------
function initKochSnowflake(){
  axiom = "F++F++F";
  rules = ["F->F-F++F-F"];
  dist = 2.8;
  alpha = 60;
}
function initSerpinskiCurve() {
  axiom = "F";
  rules = ["F->G-F-G","G->F+G+F"];
  dist = 3;
  alpha = 60;
}

function initDragonCurve() {
  axiom = "F";
  rules = ["F->F+G+","G->-F-G"];
  dist = 8;
  alpha = 90;
}

function initGosperCurve() {
  axiom = "F";
  rules = ["F->F+G++G-F--FF-G+","G->-F+GG++G+F--F-G"];
  dist = 5;
  alpha = 60;
}

function initIslandsAndLakes() {
  axiom = "F+F+F+F";
  rules = ["F->F+f-FF+F+FF+Ff+FF-f+FF-F-FF-Ff-FFF","f->ffffff"];
  dist = 2;
  alpha = 90;
}

function initPlant1() {
  axiom = "F";
  rules = ["F->F[+F]F[-F]F"];
  dist = 3;
  alpha = 25.7;
}

function initPlant2() {
  axiom = "F";
  rules = ["F->F[+F]F[-F][F]"];
  dist = 12;
  alpha = 20;
}

function initPlant3() {
  axiom = "F";
  rules = ["F->FF-[-F+F+F]+[+F-F-F]"];
  dist = 13;
  alpha = 20;
}

function initPlant4() {
  axiom = "X";
  rules = ["X->F[+X]F[-X]+X","F->FF"];
  dist = 3;
  alpha = 20;
}

function initPlant5() {
  axiom = "X";
  rules = ["X->F[+X][-X]FX","F->FF"];
  dist = 3;
  alpha = 25.7;
}

function initPlant6() {
  axiom = "X";
  rules = ["X->F[-X][X]F[-X]+FX","F->FF"];
  dist = 4.75;
  alpha = 22.5;
}
document.getElementById('kochSnowflake').onclick = function(){initKochSnowflake();}
document.getElementById('SerpinskiCurve').onclick = function(){initSerpinskiCurve();}
document.getElementById('DragonCurve').onclick = function(){initDragonCurve();}
document.getElementById('GosperCurve').onclick = function(){initGosperCurve();}
document.getElementById('IslandsAndLakes').onclick = function(){initIslandsAndLakes();}
document.getElementById('Plant1').onclick = function(){initPlant1();}
document.getElementById('Plant2').onclick = function(){initPlant2();}
document.getElementById('Plant3').onclick = function(){initPlant3();}
document.getElementById('Plant4').onclick = function(){initPlant4();}
document.getElementById('Plant5').onclick = function(){initPlant5();}
document.getElementById('Plant6').onclick = function(){initPlant6();}