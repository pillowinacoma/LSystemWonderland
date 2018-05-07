//global init variables
var animating = true;
var BG_COLOR = 51;
var TITLE1_TRANSPARENCY = 0;
var keyValue;
var stepColor = 0;
//motion
var bigW,bigH;
var zoom = 1;
//global L-system variables
var nbRep = 0;
var initAngle = 0;
var nbRep;
var grammar,turtle;
var longueur = dist;
var angleAlpha = alpha;
var nbRepP;
function setup(){
	var screen = createCanvas(windowWidth*(31/32),windowHeight*(31/32));
	screen.parent("screen");
	screen.position(windowWidth/64,windowHeight/64);
	background(BG_COLOR);
	bigW = width/2;
	bigH = height/2;
	/*
	var generationButton = createButton('Genera');
	generationButton.mousePressed(generate);
	generationButton.position(screen.position().x+20,screen.position().y+20);*/
	nbRepP = createP("");
	nbRepP.position(screen.position().x+20,screen.position().y+20);
	nbRepP.attribute('id', 'nbRepP');
	nbRepP.style('color', '#ffffff');
	nbRepP.style('font-family','sans-serif');
	currentStep = createP("");
	currentStep.position(screen.position().x+20,screen.position().y+40);
	currentStep.attribute('id', 'currentStep');
	currentStep.style('color', '#ffffff');
	currentStep.style('font-family','sans-serif');
	strokeJoin(ROUND);
	grammar = new Grammar(axiom);
	turtle = new Turtle(longueur,radians(angleAlpha));
}
function draw(){
	scale(zoom);
	translate(bigW,bigH);
	rotate(radians(initAngle));
}
function generate(){
	for (var i = 0; i < rules.length; i++) {
		grammar.addRule(rules[i].charAt(0),rules[i].substring(3));
	}
	grammar.applyRules();
	turtle.drawSys(grammar.word);
	document.getElementById('nbRepP').innerText = 'size of the word : '+grammar.word.length;
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
		background(BG_COLOR);
		strokeWeight(1);
		stroke(colors[stepColor]);			//this way we can draw lines in a variation of colors
		var len = this._stepLength;
		for(var i = 0 ; i < word.length ; i++){
			 var c = word.charAt(i);
				if (c >= 'A' && c <= 'T') {				//move one step and draw a line
			      line(0, 0, 0, -len);
			      translate(0, -len);
			    } else if (c >= 'a' && c <= 't') {		//invisible step
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

//------------------------------------------------------------------------------------------------------------
function mouseDragged(){
	var speedX = (mouseX - pmouseX);
	var speedY = (mouseY - pmouseY);
	if(keyIsPressed && keyCode === CONTROL){
		initAngle += (speedX + speedY)/10;
		turtle.drawSys(grammar.word);
	}
	else if(!keyIsPressed){
		bigW += (speedX/zoom);
		bigH += (speedY/zoom);
		turtle.drawSys(grammar.word);
	}
}

function keyPressed() {
  if (keyCode === ENTER) {
    generate();
  }
  return false;
}
function mouseWheel(event) {
	if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height ){
	  zoom += 0.01 * event.delta;
	  turtle.drawSys(grammar.word);
	}
  return false;
}

//------------------------------------------------------------------------------------------------------------
