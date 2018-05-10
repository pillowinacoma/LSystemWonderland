var axiom="f";
var rules="f->ff";
var dist=1;
var alpha=60;
function putValsInFields() {
  document.getElementById('axiom').value = axiom;
  document.getElementById('angle').value = alpha;
  document.getElementById('dist').value = dist;
  document.getElementById('rules').value = rules;
}

function initKochSnowflake(){
  axiom = "F++F++F";
  rules = "F->F-F++F-F";
  dist = 2.8;
  alpha = 60;
  initAngle = 0;
  putValsInFields();
}
function initSerpinskiCurve() {
  axiom = "F";
  rules = "F->G-F-G\nG->F+G+F";
  dist = 5;
  alpha = 60;
  initAngle = -alpha/2;
  putValsInFields();
}

function initDragonCurve() {
  axiom = "F";
  rules = "F->F+G+\nG->-F-G";
  dist = 8;
  alpha = 90;
  initAngle = 0;
  putValsInFields();
}

function initGosperCurve() {
  axiom = "F";
  rules = "F->F+G++G-F--FF-G+\nG->-F+GG++G+F--F-G";
  dist = 5;
  alpha = 60;
  initAngle = 0;
  putValsInFields();
}

function initIslandsAndLakes() {
  axiom = "F+F+F+F";
  rules = "F->F+f-FF+F+FF+Ff+FF-f+FF-F-FF-Ff-FFF\nf->ffffff";
  dist = 2;
  alpha = 90;
  initAngle = 0;
  putValsInFields();
}

function initPlant1() {
  axiom = "F";
  rules = "F->F[+F]F[-F]F";
  dist = 3;
  alpha = 25.7;
  initAngle = 0;
  putValsInFields();
}

function initPlant2() {
  axiom = "F";
  rules = "F->F[+F]F[-F][F]";
  dist = 12;
  alpha = 20;
  initAngle = 0;
  putValsInFields();
}

function initPlant3() {
  axiom = "F";
  rules = "F->FF-[-F+F+F]+[+F-F-F]";
  dist = 13;
  alpha = 20;
  initAngle = 0;
  putValsInFields();
}

function initPlant4() {
  axiom = "X";
  rules = "X->F[+X]F[-X]+X\nF->FF";
  dist = 3;
  alpha = 20;
  initAngle = 0;
  putValsInFields();
}

function initPlant5() {
  axiom = "X";
  rules = "X->F[+X][-X]FX\nF->FF";
  dist = 3;
  alpha = 25.7;
  initAngle = 0;
  putValsInFields();
}

function initPlant6() {
  axiom = "X";
  rules = "X->F[-X][X]F[-X]+FX\nF->FF";
  dist = 4.75;
  alpha = 22.5;
  initAngle = 0;
  putValsInFields();
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
  }
  else if(!probaStat){
    document.getElementById('SOLRow').hidden = true;
    document.getElementById('DOLRow').hidden = false;
    document.getElementById('SOLproba').required = false;
    document.getElementById('rules').required = true;
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
