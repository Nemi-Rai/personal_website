window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#18191a";
    document.getElementById("collapse").style.background = "#18191a";
  } else {
   
    document.getElementById("navbar").style.background = "none";
    document.getElementById("collapse").style.background = "none";
  }
}
