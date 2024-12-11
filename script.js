const preferredDarkMode = localStorage.getItem('preferredColorScheme');

matchWindowMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (matchWindowMode) {
    document.getElementById("dark_mode").style.display = "none";
    document.getElementById("light_mode").style.display = "block";
} 
else {
    darkMode();
    document.getElementById("dark_mode").style.display = "block";
    document.getElementById("light_mode").style.display = "none";
}

if (preferredDarkMode == 'dark') {
    document.getElementById("dark_mode").style.display = "none";
    document.getElementById("light_mode").style.display = "block";
} 
else if (preferredDarkMode == 'light') {
    darkMode();
    document.getElementById("dark_mode").style.display = "block";
    document.getElementById("light_mode").style.display = "none";

}

function capsOnConvert() { 
    let inputText = document.getElementById("textInput"); 
    let value = inputText.value; 

    const capsOnText = "%+๑๒๓๔ู฿๕๖๗๘๙๐\"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦqwertyuiopasdfghjklzxcvbnm";
    const capsOffText = "_ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝQWERTYUIOPASDFGHJKLZXCVBNM";
    let outputText = "";
    let capsOnIndex;

    let inputArr = value.split("");
    const capsOnArr = capsOnText.split("");
    const capsOffArr = capsOffText.split("");

    for (let i = 0; i < inputArr.length; i++) {
        if (capsOnArr.includes(inputArr[i])) {
            capsOnIndex = capsOnArr.indexOf(inputArr[i]);
            outputText += capsOffArr[capsOnIndex];
        }
        else if (capsOffArr.includes(inputArr[i])) {
            capsOffIndex = capsOffArr.indexOf(inputArr[i]);
            outputText += capsOnArr[capsOffIndex];
        }
        else {
            outputText += inputArr[i];
        }
        
    }
    document.getElementById("textOutput").innerHTML = outputText;
}

document.getElementById("textInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        capsOnConvert();
    }
});

function textSwap() { 
    let inputText = document.getElementById("textInput"); 
    let outputText = document.getElementById("textOutput"); 
    let inputTextVal = inputText.value; 
    let outputTextVal = outputText.value; 

    inputText.value = outputTextVal;
    document.getElementById("textOutput").innerHTML = inputTextVal;
}



function darkMode() {
    if (areaContainer.classList.contains('light-mode')) {
        localStorage.setItem('preferredColorScheme', 'dark');
        document.getElementById("dark_mode").style.display = "none";
        document.getElementById("light_mode").style.display = "block";
    } else {
        localStorage.setItem('preferredColorScheme', 'light');
        document.getElementById("dark_mode").style.display = "block";
        document.getElementById("light_mode").style.display = "none";
    }
    document.body.classList.toggle('light-mode');
    document.documentElement.classList.toggle('light-mode');

    document.getElementById('areaContainer').classList.toggle("light-mode");
    document.getElementById("textInput").classList.toggle("light-mode");
    document.getElementById("textOutput").classList.toggle("light-mode");
    document.getElementById("swapBtn").classList.toggle("light-mode");
    document.getElementById("convertBtn").classList.toggle("light-mode");
    document.getElementById("darkModeBtn").classList.toggle("light-mode");

    document.querySelector(".h2").classList.toggle("light-mode");
    document.querySelector(".textBox").classList.toggle("light-mode");

}


