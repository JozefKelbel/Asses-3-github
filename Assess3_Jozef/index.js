var to = document.getElementById("to");
var message = document.getElementById("message");
var from = document.getElementById("from");
var inpTo = document.getElementById("inpTo");
var inpMsg = document.getElementById("inpMsg");
var inpFrom = document.getElementById("inpFrom");
var inpBG = document.getElementById("inpBG");
var postcard = document.getElementById("postcard");
var preview = document.getElementById("preview");
var gallery = document.getElementById("gallery");
var Sarray = document.getElementById("Sarray");
var Larray = document.getElementById("Larray");

inpBG.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
       postcard.style.backgroundImage = "url("+inpBG.value+")";
    }
});

inpTo.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        inpTo.innerHTML = to.value;
    }
});

inpMsg.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        inpMsg.innerHTML = message.value;
    }
});

inpFrom.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        inpFrom.innerHTML = from.value;
    }
});



gallery.addEventListener("click", function(){
    var ndiv = document.createElement("div");
    ndiv.className = "item";
    ndiv.style.backgroundImage = "url("+inpBG.value+")";
    ndiv.style.backgroundSize = "cover";
    preview.appendChild(ndiv);
    
    console.log(ndiv);
    
    var ntitle = document.createElement("div");
    ntitle.className = "itemTitle";
    ntitle.innerHTML = inpTo.value;
    ndiv.appendChild(ntitle);
});




