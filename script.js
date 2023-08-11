var quotebox = document.querySelector(".quote-box");
var message = document.querySelector(".message");
var inputbox = document.querySelector("#input-box");
var btn = document.querySelector("#btn-start");
var output = document.querySelector(".output");
var quotes = ['This is a sample quote1','this is sample quote 2.'];
var word = [];
var wordindex=0;
var starttime = Date.now();

function randomQuote () {
    var index= Math.floor(Math.random() *quotes.length);
    word = quotes[index].split(' ');
    quotebox.innerText = quotes[index];
}

function messagedisplay(){
    
        message.style="display:none";
  
}

function process() {
    messagedisplay();
    randomQuote();
    
}

function typing(){
    message.innerText="user is typing.."
}

btn.addEventListener("click",process);
inputbox.addEventListener("OnChange",typing);