<!DOCTYPE html>
<html>
<title>Tutorial</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body{
	background: rgb(217,205,145);
}
.footer{
	background: rgb(191,96,75);
	padding-left: 1em;
}
.links{
	max-width: 30px;
}
body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif;}
p{color: rgb(64,20,44);}
.w3-sidebar {
  z-index: 3;
  width: 250px;
  top: 0px;
  bottom: 0;
  height: inherit;
}
img.ctrl{
	max-width: 50px;
}
img.mouse{
	max-width: 40px;
}
img.enter{
	max-width: 40px;
}
.buttons{
	background-color: rgb(191,96,75);
  border-radius: 10px;
  color: white;
	padding: 0em 5em 0em 5em;
  text-decoration: none;
  margin-top: 5px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  width : 50%;
}
.buttons p{
	font-weight: bold;
	font-size: 1.25em;
	color: rgb(217,205,145);
}
</style>
<body>


<!-- Sidebar -->
<nav class="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large" title="Close Menu">
    <i class="fa fa-remove"></i>
  </a>
  <h4 class="w3-bar-item"><b>Menu</b></h4>
  <a class="w3-bar-item w3-button w3-hover-black" href="#how1">What is an L-System ?</a>
  <a class="w3-bar-item w3-button w3-hover-black" href="#how2">How does this work ?</a>
  <a class="w3-bar-item w3-button w3-hover-black" href="#commands">Commands</a>
</nav>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- Main content: shift it to the right by 250 pixels when the sidebar is visible -->
<div class="w3-main" style="margin-left:250px">

  <div class="w3-row w3-padding-64">
    <div class="w3-twothird w3-container">
      <h1 class="heading" style="color : rgb(166,60,60);" id="how1">What is an L-System ?</h1>
      <p>An L-system or Lindenmayer system is a parallel rewriting system and a type of formal grammar. An L-system consists of an alphabet of symbols that can be used to make strings, a collection of production rules that expand each symbol into some larger string of symbols, an initial "axiom" string from which to begin construction, and a mechanism for translating the generated strings into geometric structures. L-systems were introduced and developed in 1968 by Aristid Lindenmayer, a Hungarian theoretical biologist and botanist at the University of Utrecht. Lindenmayer used L-systems to describe the behaviour of plant cells and to model the growth processes of plant development. L-systems have also been used to model the morphology of a variety of organisms and can be used to generate self-similar fractals.
			</p>
			<p style="font-size : 0.7em;">Wikipedia</p>
    </div>
  </div>

  <div class="w3-row w3-padding-64">
    <div class="w3-twothird w3-container">
      <h1 class="heading" style="color : rgb(166,60,60);" id="how2">How does this web site work ?</h1>
      <p>After entering the required data, click on the "Create now!" button and follow the commands below</p>
			<p>Supported grammar :</p>
			<ul style="color : rgb(64,20,44);">
				<li>letters from 'A' to 'T' : Draw a line</li>
				<li>letters from 'a' to 't' : Move without drawing a line</li>
				<li>+ : Turn left</li>
				<li>- : Turn right</li>
				<li>| : Turn around</li>
				<li>[ : Save state (position and direction)</li>
				<li>] : Restore last saved state</li>
			</ul>
    </div>
  </div>

	<div class="w3-row">
		<div class="w3-twothird w3-container">
			<h1 class="heading" style="color : rgb(166,60,60);" id="commands">Commands</h1>
			<ul style="color : rgb(64,20,44);">
				<li class="buttons"> <p>Generate L-System :</p><img src="img/enter.png" class="enter"></li>
				<li class="buttons"> <p>Translation :</p><img src="img/arrow.png" class="mouse"></li>
				<li class="buttons"> <p>Rotation :</p><img src=" img/ctrl.png" class="ctrl"> <p style="display : inline; font-size : 2em">+</p> <img src="img/arrow.png" class="mouse"></li>
			</ul>
		</div>
	</div>

  <footer id="myFooter">
    <div class="footer">
			<p>
				<a href="https://github.com/pillowinacoma"> <img class="links" src="img/github.svg"></a>
				<a href="https://twitter.com/pillowinacoma"> <img class="links" src="img/twitter.png"></a>
			</p>
    </div>


  </footer>

<!-- END MAIN -->
</div>

<script>
// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}
</script>

</body>
</html>
