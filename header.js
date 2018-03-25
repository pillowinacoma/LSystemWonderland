var rotationCoeff = 0;
var animating = true;
var initAngle = 0;
var length = 100;
var rotationAngle = 60;
var Xmax = 0,Xmin = 0,Ymax = 0,Ymin = 0;
var BG_COLOR = 51;
var TITLE1_TRANSPARENCY = 0;

function preload(){
	
}
function setup(){
	var centeringX = width/16;
	var centeringY = height/16;
	var axiom = "f",word,nbRep = 0, angle = 60, length;
	var screen = createCanvas(2*windowWidth/3,windowHeight);
	screen.parent("header");
	background(BG_COLOR);
	//noLoop();
}
function draw(){
	if (animating){
		push();
			animating = false;
		pop();
	}
	else {
		background(BG_COLOR);
		noLoop();
		document.getElementById('submit').onclick = function(){
			if (document.getElementsByName('axiom').value != null) {
				axiom = document.getElementByName('axiom').value;
			}
				var grammar = new Grammar('axiom');
			if (document.getElementsByName('angle').value != null) {
				angle = parseFloat(document.getElementByName('angle').value);
			}
			if (document.getElementsByName('rules').value != null) {
				var ruleTable = document.getElementByName('rules').value.split("\n");
				for (var i = 0; i < ruleTable.length; i++) {
					grammar.addRule(ruleTable[i].charAt(0),ruleTable.substring(3));
				}
			}
		}

	}
}
function sysGen(){
	var nextWord = "";
	nbRep++;
	for (var i = 0; i < word.length; i++) {
		
	}
}
function shapeMesure(word,initAngle){
	var angle = initAngle;
	var len = -length;
	var _Xmax = 0,_Xmin = 0,_Ymax = 0,_Ymin = 0;
	for (var i = 0; i < word.length; i++) {
		var c = word.charAt(i);
		if(c == 'f' || c == 'F'){
			if (_Xmin > cos(initAngle)/len)
				_Xmin = cos(initAngle)/len;
			else if(_Xmax < cos(initAngle)/len)
				_Xmax = cos(initAngle)/len;
			if (_Ymin > sin(initAngle)/len)
				_Ymin = sin(initAngle)/len;
			else if(_Ymax < sin(initAngle)/len)
				_Ymax = sin(initAngle)/len;
		}
		else if(c == '+'){
			angle += rotationAngle;
		}
		else if(c == '-'){
			angle -= rotationAngle;
		}
	}
	Ymin = _Ymin;
	Ymax = _Ymax;
	Xmin = _Xmin;
	Xmax = _Xmax;
}
class Turtle{
	constructor(stepLength,rotationAngle){
		this.stepLength = stepLength;
		this.rotationAngle = rotationAngle;
	}
	drawSys(word){
		var colors = Array(color(255,255,255),color(255,0,0),color(255,127,0),color(255,255,0),color(0,255,0),color(0,0,255),color(75,0,130),color(143,0,255));
		stepColor = 0;
		background(BG_COLOR);
		stroke(colors[stepColor]);			//this way we can draw lines in a variation of colors
		var len = stepLength;

		for(var i = 0 ; i < word.length ; i++){
			 var c = word.charAt(i);
				if (c == 'f') {				//move one step and draw a line
			      line(0, 0, 0, -l);
			      translate(0, -l);
			    } else if (c == 'F') {		//invisible step
			      translate(0, -l);
			    } else if (c == '+') {		//turn "right" by rotationAngle
			      rotate(rotationAngle);			
			    } else if (c == '-') {		//turn "left" by rotationAngle
			      rotate(-rotationAngle);
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
		this._rules = [];
	}
	addRule(predec,succ){
		_rules[predec] = succ;
	}
	applyRules(){
		var result = "";
		for (var i = 0; i < _word.length; i++) {
			if(_rules[_word.charAt(i)] != null){
				result += _rules[_word.charAt(i)];
			}
			else{
				result += _word.charAt(i);
			}
		}
		_word = result;
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
function openingAnimation(){
	
}