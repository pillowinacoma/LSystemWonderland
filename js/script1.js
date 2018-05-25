var BG_COLOR;
var HEAD_TRANSPARENCY = 255;
var corvinus_skyline_font,huskystash;
var Y_gunspos,X_gunspos,X_npos,Y_npos,logoX,logoY;
var lineW = 0;
var gnrLOGO;
var nothingindice = 0;
var gunNroses = "L-system";
var move = 0;
var titleInAction = 0;
var DBtextcount = -50;
var grammar,turtle;
var axiom = "X";
var longueur = 10;
var angleAlpha = 20;
var preRules = "X->F[+X]F[-X]+X,0.5;F[--X]F[+X]+X,0.5_F->FF,0.5;F,0.5".split("_");
var rules = [];
for (var i = 0; i < preRules.length; i++) {
	var s = preRules[i].substring(3).split(";");
	var elem = [];
	for (var j = 0; j < s.length; j++) {
		var ss = s[j].split(",");
		var selem = {
			rule : ss[0],
			probability : parseFloat(ss[1])
		}
		elem.push(selem);
	}
	rules[preRules[i].charAt(0)] = (elem);
}
function setup() {
	logoX = -width/2, logoY = -height/2;
	X_npos = -10-width, Y_npos = 100 , X_gunspos = 0, Y_gunspos = 0;
	corvinus_skyline_font = loadFont("fonts/Corvinus Skyline ICG.ttf");
	huskystash = loadFont("fonts/husky stash.ttf");
	BG_COLOR = color(217,205,145);
	var bg = createCanvas(windowWidth,windowHeight);
	bg.parent("background");
	background(BG_COLOR);
	grammar = new Grammar(axiom);
	turtle = new Turtle(longueur,radians(angleAlpha));
	//grammar.applyRules();
}
function draw(){
	background(BG_COLOR);
	push();
		translate(0,height/2);
				textAlign(RIGHT,CENTER);
				textSize(height/2+height/4+height/8+X_gunspos/5);
				textFont(corvinus_skyline_font);
				fill(217,159,108,abs(X_gunspos/5));
				text(gunNroses,X_gunspos,Y_gunspos);DBtextcount++;
				textAlign(RIGHT,CENTER);
				textSize(height/2+height/4+X_gunspos/5);
				textFont(corvinus_skyline_font);
				fill(191,96,75,abs(X_gunspos/5));
				text(gunNroses,X_gunspos,Y_gunspos);DBtextcount++;
				textAlign(RIGHT,CENTER);
				textSize(height/2+X_gunspos/5);
				textFont(corvinus_skyline_font);
						push();
						translate(width/4,height/2);
						nothingindice++;
						longueur++;
						if (nothingindice == 10) {
							grammar.applyRules();
						}
						else if (nothingindice == 20) {
							grammar.applyRules();
						}
						else if (nothingindice == 30) {
							grammar.applyRules();
						}
						else if (nothingindice == 40) {
							grammar.applyRules();
						}
						else if (nothingindice == 50) {
							grammar.applyRules();
						}
						else if (nothingindice == 60) {
							grammar.applyRules();
						}
						turtle.drawSys(grammar.word);
						pop();
				fill(166,60,60,abs(X_gunspos/5));
				text(gunNroses,X_gunspos,Y_gunspos);DBtextcount++;
		textAlign(RIGHT,CENTER);
		textSize(height/2);
		textFont(corvinus_skyline_font);
		fill(64,20,44);
		titleInAction = width/2+textWidth(gunNroses);
		text(gunNroses,X_gunspos,Y_gunspos);
		X_gunspos+=windowWidth/120 - X_gunspos/100;
		move+=6;
		/*To The \n Studio*/
		if(DBtextcount>=1){
			fill(141,166,129,abs(move/3));
			textSize(height/4)
			textFont(huskystash);
			textAlign(LEFT);
			text("S",textWidth(""),textWidth("S"));
			textSize(height/8);
			text("To the",textWidth(""),-textWidth("S")-textWidth("S")/2);
			textSize(height/4);
			if (3*X_gunspos/3 >=1*width/8) {
				text("t",textWidth("S"),textWidth("S"));
				if (3*X_gunspos/3 >=2*width/8) {
					text("u",textWidth("St"),textWidth("S"));
					if (3*X_gunspos/3 >=3*width/8) {
						text("d",textWidth("Stu"),textWidth("S"));
						if (3*X_gunspos/3 >=4*width/8) {
							text("i",textWidth("Stud"),textWidth("S"));
							if (3*X_gunspos/3 >=5*width/8) {
								text("o",textWidth("Studi"),textWidth("S"));
							}
						}
					}
				}
			}
		}
	pop();
}

function mouseWheel(event){
	X_gunspos += event.delta/2;
}
//******************************************************************************************
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
		//background(BG_COLOR);
		strokeWeight(X_gunspos/1000);
		stroke(64,20,44,X_gunspos-500);			//this way we can draw lines in a variation of colors
		var len = 10*X_gunspos/height;
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
					} else if(c == '|'){
						rotate(PI);
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
		this._rules = rules;
	}
	applyRules(){
		var result = "";
		for (var i = 0; i < this._word.length; i++) {
			if(this._rules[this._word.charAt(i)] != null){
				var rand = Math.floor(Math.random()*100 + 1);
				var deb = 0;
				var fin = 0;
				for (var j = 0; j < this._rules[this._word.charAt(i)].length && fin <= 100; j++) {
					fin += this._rules[this._word.charAt(i)][j].probability * 100;
					if(rand >= deb && rand <= fin){
						result += this._rules[this._word.charAt(i)][j].rule;
						break;
					}
				}
				if(fin > 100){
					result += this._word.charAt(i);
				}
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
