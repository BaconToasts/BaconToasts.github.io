
window.onload = function() {
    document.getElementById("biggerButton").addEventListener("click", increaseFontSize);
}

function increaseFontSize() {

    var textArea = document.getElementById("textArea");
	textArea.style.fontSize = "4em";
	
}

function fancifyText() {
    var textArea = document.getElementById("textArea");
    if (document.getElementById("fancyRadio").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

function defancifyText() {
    var textArea = document.getElementById("textArea");
    if (document.getElementById("boringRadio").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    var textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toUpperCase();
    var sentences = textArea.value.split(".");
    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }
    textArea.value = sentences.join(". ");
}
