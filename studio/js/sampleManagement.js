var axiom="f";
var rules="f->ff";
var dist=1;
var alpha=60;
window.onload = function() {
  affProba();
  if(document.getElementById('SOLproba').hidden){
    document.getElementById('DOL').checked = true;
    document.getElementById('SOL').checked = false;
    affProba();
  }
  else{
    document.getElementById('SOL').checked = true;
    document.getElementById('DOL').checked = false;
    affProba();
  }
};
function putValsInFields() {
  document.getElementById('axiom').value = axiom;
  document.getElementById('angle').value = alpha;
  document.getElementById('dist').value = dist;
  document.getElementById('rules').value = rules;
}
function putValsInFieldsSOL() {
  document.getElementById('axiom').value = axiom;
  document.getElementById('angle').value = alpha;
  document.getElementById('dist').value = dist;
  document.getElementById('SOLproba').value = rules;
}

function initKochSnowflake(){
  axiom = "F++F++F";
  rules = "F->F-F++F-F";
  dist = 2.8;
  alpha = 60;
  initAngle = 0;
  putValsInFields();
  document.getElementById('DOL').checked = true;
  affProba();
}
function initSerpinskiCurve() {
  axiom = "F";
  rules = "F->G-F-G\nG->F+G+F";
  dist = 5;
  alpha = 60;
  initAngle = -alpha/2;
  putValsInFields();
  document.getElementById('DOL').checked = true;
  affProba();
}

function initDragonCurve() {
  axiom = "F";
  rules = "F->F+G+\nG->-F-G";
  dist = 8;
  alpha = 90;
  initAngle = 0;
  putValsInFields();
  document.getElementById('DOL').checked = true;
  affProba();
}

function initGosperCurve() {
  axiom = "F";
  rules = "F->F+G++G-F--FF-G+\nG->-F+GG++G+F--F-G";
  dist = 5;
  alpha = 60;
  initAngle = 0;
  putValsInFields();
  document.getElementById('DOL').checked = true;
  affProba();
}

function initIslandsAndLakes() {
  axiom = "F+F+F+F";
  rules = "F->F+f-FF+F+FF+Ff+FF-f+FF-F-FF-Ff-FFF\nf->ffffff";
  dist = 2;
  alpha = 90;
  initAngle = 0;
  putValsInFields();
  document.getElementById('DOL').checked = true;
  affProba();
}

function initPlant1() {
  axiom = "F";
  rules = "F->F[+F]F[-F]F";
  dist = 3;
  alpha = 25.7;
  initAngle = 0;
  putValsInFields();
  document.getElementById('DOL').checked = true;
  affProba();
}

function initPlant2() {
  axiom = "F";
  rules = "F->F[+F]F[-F][F]";
  dist = 12;
  alpha = 20;
  initAngle = 0;
  putValsInFields();
  document.getElementById('DOL').checked = true;
  affProba();
}

function initPlant3() {
  axiom = "F";
  rules = "F->FF-[-F+F+F]+[+F-F-F]";
  dist = 13;
  alpha = 20;
  initAngle = 0;
  putValsInFields();
  document.getElementById('DOL').checked = true;
  affProba();
}

function initPlant4() {
  axiom = "X";
  rules = "X->F[+X]F[-X]+X\nF->FF";
  dist = 3;
  alpha = 20;
  initAngle = 0;
  putValsInFields();
  document.getElementById('DOL').checked = true;
  affProba();
}

function initPlant5() {
  axiom = "X";
  rules = "X->F[+X][-X]FX\nF->FF";
  dist = 3;
  alpha = 25.7;
  initAngle = 0;
  putValsInFields();
  document.getElementById('DOL').checked = true;
  affProba();
}

function initPlant6() {
  axiom = "X";
  rules = "X->F[-X][X]F[-X]+FX\nF->FF";
  dist = 4.75;
  alpha = 22.5;
  initAngle = 0;
  putValsInFields();
  document.getElementById('DOL').checked = true;
  affProba();
}
//-----------------------------------------------------------------------------------------------------

function initKochSnowflakeSOL(){
  axiom = "F++F++F";
  rules = "F->F-F++F-F,1";
  dist = 2.8;
  alpha = 60;
  initAngle = 0;
  putValsInFieldsSOL();
  document.getElementById('SOL').checked = true;
  affProba();
}
function initSerpinskiCurveSOL() {
  axiom = "F";
  rules = "F->G-F-G,1\nG->F+G+F,1";
  dist = 5;
  alpha = 60;
  initAngle = -alpha/2;
  putValsInFieldsSOL();
  document.getElementById('SOL').checked = true;
  affProba();
}

function initDragonCurveSOL() {
  axiom = "F";
  rules = "F->F+G+,1\nG->-F-G,1";
  dist = 8;
  alpha = 90;
  initAngle = 0;
  putValsInFieldsSOL();
  document.getElementById('SOL').checked = true;
  affProba();
}

function initGosperCurveSOL() {
  axiom = "F";
  rules = "F->F+G++G-F--FF-G+,1\nG->-F+GG++G+F--F-G,1";
  dist = 5;
  alpha = 60;
  initAngle = 0;
  putValsInFieldsSOL();
  document.getElementById('SOL').checked = true;
  affProba();
}

function initIslandsAndLakesSOL() {
  axiom = "F+F+F+F";
  rules = "F->F+f-FF+F+FF+Ff+FF-f+FF-F-FF-Ff-FFF,1\nf->ffffff,1";
  dist = 2;
  alpha = 90;
  initAngle = 0;
  putValsInFieldsSOL();
  document.getElementById('SOL').checked = true;
  affProba();
}

function initPlant1SOL() {
  axiom = "F";
  rules = "F->F[+F]F[-F]F,0.6;F[-FF]F,0.4";
  dist = 3;
  alpha = 25.7;
  initAngle = 0;
  putValsInFieldsSOL();
  document.getElementById('SOL').checked = true;
  affProba();
}

function initPlant2SOL() {
  axiom = "F";
  rules = "F->F[+F]F[-F][F],0.5;F[+F]F[-F][F],0.4;F,0.1";
  dist = 12;
  alpha = 20;
  initAngle = 0;
  putValsInFieldsSOL();
  document.getElementById('SOL').checked = true;
  affProba();
}

function initPlant3SOL() {
  axiom = "F";
  rules = "F->FF-[-F+F+F]+[+F-F-F],0.4;FF,0.3;F,0.3";
  dist = 13;
  alpha = 20;
  initAngle = 0;
  putValsInFieldsSOL();
  document.getElementById('SOL').checked = true;
  affProba();
}

function initPlant4SOL() {
  axiom = "X";
  rules = "X->F[+X]F[-X]+X,0.5;F[--X]F[+X]+X,0.5\nF->FF,0.5;F,0.5";
  dist = 3;
  alpha = 20;
  initAngle = 0;
  putValsInFieldsSOL();
  document.getElementById('SOL').checked = true;
  affProba();
}

function initPlant5SOL() {
  axiom = "X";
  rules = "X->F[+X][-X]FX,0.5;F[X+F+X][-X]FX,0.5\nF->FF,0.5;F,0.5";
  dist = 3;
  alpha = 25.7;
  initAngle = 0;
  putValsInFieldsSOL();
  document.getElementById('SOL').checked = true;
  affProba();
}

function initPlant6SOL() {
  axiom = "X";
  rules = "X->F[-X][X]F[-X]+FX,0.5;F[-X][X]F,0.3;X,0.2\nF->FF,0.5;F,0.5";
  dist = 4.75;
  alpha = 22.5;
  initAngle = 0;
  putValsInFieldsSOL();
  document.getElementById('SOL').checked = true;
  affProba();
}
//-----------------------------------------------------------------------------------------------------

function rulesIntoArray() {
  var preRules = document.getElementById('rules').value;
  var rules = preRules.split("\n");
  var after = rules.join("_");
  document.getElementById('realRules').value = after;
}
function rulesIntoArraySOL() {
  var preRules = document.getElementById('SOLproba').value;
  var rules = preRules.split("\n");
  var after = rules.join("_");
  document.getElementById('realSOLRules').value = after;
}
function affProba() {
  var probaStat = document.getElementById('SOL').checked;
  if(probaStat){
    document.getElementById('SOLRow').hidden = false;
    document.getElementById('DOLRow').hidden = true;
    document.getElementById('SOLproba').required = true;
    document.getElementById('rules').required = false;
    afficheSOLsugg();
  }
  else if(!probaStat){
    document.getElementById('SOLRow').hidden = true;
    document.getElementById('DOLRow').hidden = false;
    document.getElementById('SOLproba').required = false;
    document.getElementById('rules').required = true;
    afficheDOLsugg();
  }
}
function getAction(){
  var probaStat = document.getElementById('SOL').checked;
  if(!probaStat){
    rulesIntoArray();
    document.getElementById('formLsystem').action = "screenDOL.html.php"
  }
  else{
    rulesIntoArraySOL();
    document.getElementById('formLsystem').action = "screenSOL.html.php"
  }
}

function afficheDOLsugg() {
  document.getElementById('DOLsugg').hidden = false;
  document.getElementById('SOLsugg').hidden = true;
}
function afficheSOLsugg() {
  document.getElementById('DOLsugg').hidden = true;
  document.getElementById('SOLsugg').hidden = false;
}
