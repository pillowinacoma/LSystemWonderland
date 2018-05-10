var pages = document.getElementsByClassName('page');
document.getElementById('next').onclick = function() {
  for (var i = 0; i < 90; i++) {
    document.getElementById('page1').style.transform = "rotateY("+i+"deg)";
  }
}
