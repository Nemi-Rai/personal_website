function background() {
    if (document.getElementById("navbutton").ariaExpanded == false) {
        document.getElementById("collapse").style.background = "none";
    } else {
        document.getElementById("collapse").style.background = "#18191a";
    }
}