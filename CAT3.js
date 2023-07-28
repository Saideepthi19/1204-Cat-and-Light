let onbulb=document.getElementById("bulb");
let imagecat=document.getElementById("cat");
let switchon=document.getElementById("switch");
let onbuttn=document.getElementById("onbtn");
let offbuttn=document.getElementById("offbtn");
function onbuttuon(){
    onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchon.textContent="Switched On";
    switchon.style.color=red;
    onbuttn.style.backgroundColor= green;
    offbuttn.style.backgroundColor=gray;
}
function offbutton(){
    onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchon.textContent="Switched Off";
    switchon.style.color=red;
    onbuttn.style.backgroundColor= gray;
    offbuttn.style.backgroundColor=gray;
}

