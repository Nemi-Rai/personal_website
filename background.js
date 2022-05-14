function background() {
    if (document.getElementById("navbutton").ariaExpanded == false) {
        document.getElementById("collapse").style.backgroundColor = "none";
    } else {
        document.getElementById("collapse").style.backgroundColor = "#18191a";
    }
}