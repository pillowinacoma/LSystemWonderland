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
function setup() {
	logoX = -width/2, logoY = -height/2;
	X_npos = -10-width, Y_npos = 100 , X_gunspos = 0, Y_gunspos = 0;
	corvinus_skyline_font = loadFont("fonts/Corvinus Skyline ICG.ttf");
	huskystash = loadFont("fonts/husky stash.ttf");
	BG_COLOR = color(217,205,145);
	var bg = createCanvas(windowWidth,windowHeight);
	bg.parent("background");
	background(BG_COLOR);
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
			if (3*X_gunspos/3 >=width/8) {
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