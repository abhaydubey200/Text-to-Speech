document.getElementById("speakbtn").addEventListener("click", function() {
    let synth = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(document.getElementById("textbox").value);
    synth.speak(voice);
});
