window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#3a3b3c";
    document.getElementById("navbar").style.opacity = "0.95";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}
