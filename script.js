let button = document.getElementById("btn")
button,onclick = function(){
    let randomcolor = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.document.body.style.backgroundColor = randomcolor;
}