function background() {
    if (document.getElementById("collapse").ariaExpanded == false) {
        document.getElementById("collapse").style.backgroundColor = "none";
    } else {
        document.getElementById("collapse").style.backgroundColor = "#18191a";
    }
}