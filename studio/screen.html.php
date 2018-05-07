<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title> </title>
    <!--P5*JS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->
		<script src="../p5/p5.min.js"></script>
    <script src="../p5/addons/p5.dom.min.js"></script>
    <script src="../p5/addons/p5.sound.min.js"></script>
    <!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->
  </head>
  <body>
    <script>
      var axiom = <?php echo "'".$_GET['axiom']."'"; ?> ;
      var alpha = <?php echo $_GET['angle']; ?> ;
      var dist = <?php echo $_GET['dist']; ?> ;
      var rules = <?php echo "\"".$_GET['realRules']."\"";?>.split("|");
    </script>
    <script src="js/screenScript.js"></script>
    <div id="screen"></div>
  </body>
</html>
