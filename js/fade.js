window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.background = "#050505";
    document.getElementById("navbutton").style.display = "block";
  } else {
    document.getElementById("navbar").style.background = "none";
    document.getElementById("navbutton").style.display = "none";
  }
}
