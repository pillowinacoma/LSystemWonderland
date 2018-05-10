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
      var ruleTest = true;
      var axiom = <?php echo "'".$_GET['axiom']."'"; ?> ;
      var alpha = <?php echo $_GET['angle']; ?> ;
      var dist = <?php echo $_GET['dist']; ?> ;
      var preRules = <?php echo "\"".$_GET['realSOLRules']."\"";?>.split("_");
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
      }/*
      console.log(rules);
      console.log(Object.keys(rules)[0]);
  		console.log(rules[Object.keys(rules)[0]]);*/

    </script>
    <script src="js/screenScriptSOL.js"></script>
    <div id="screen"></div>
  </body>
</html>
