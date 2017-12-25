var headerSplash;
var portrait;
var arrow;
var html = document.documentElement;
window.onload = function start (){
  headerSplash = document.getElementById('headerSplash');
  portrait = document.getElementsByClassName('portrait')[0];
  arrow = document.getElementsByClassName('arrow')[0];
}

function centerImage(){
  for (var i = 0; i < document.getElementsByClassName('g_image').length; i++) {
      document.getElementsByClassName('g_image')[i].style.backgroundPosition = "center";
  }
}

function updateParallax(){
  var scrollValue = html.scrollTop;
  var scrollString = "0px " + (scrollValue/4 - 200) + "px";
  if (scrollValue < 100) {
    portrait.style.backgroundPosition = "0px " + (-scrollValue/2 + 50) + "px";
  }
  else {
    portrait.style.backgroundPosition = "0px 0px"
  }
  headerSplash.style.backgroundPosition = scrollString;
  arrow.style.opacity = (50-scrollValue/2)/50;
}
