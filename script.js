var quotebox = document.querySelector(".quote-box");
var message = document.querySelector(".message");
var inputbox = document.querySelector("#input-box");
var btn = document.querySelector("#btn-start");
var output = document.querySelector(".output");
var quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
var word = [];
var wordindex=0;
var starttime = Date.now();

function randomQuote () {
    var index= Math.floor(Math.random() *quotes.length);
    word = quotes[index].split(' ');
    
    let spanword = word.map((word)=>{
        return `<span class="word">${word} </span>`;
    })
    quotebox.innerHTML = spanword.join('');

    quotebox.childNodes[0].className = 'highlight';

    message.innerText=" ";

    inputbox.value = "";
    


}


function process() {
    word = [];
    wordindex=0;
    starttime = new Date().getTime();
    randomQuote();
    inputbox.removeAttribute("disabled",null);
    inputbox.focus();
    btn.innerText = "Typing...";
    btn.setAttribute("disabled",null);
    
}

function typing(){
     
    message.innerText="Type as fast as you can. Give your best.";

    let currentword = word[wordindex];
    let inputvalue = inputbox.value;

    if(inputvalue === currentword && wordindex === word.length-1){
        let time = new  Date().getTime() - starttime;
        message.innerHTML = `Time elapsed : ${(time)/1000}`;
        inputbox.setAttribute("disabled",null);
        btn.innerText = "Re-Start";
        btn.removeAttribute("disabled",null);


    }else if(inputvalue.endsWith(' ') && inputvalue.trim() === currentword){
        

        wordindex++;

        for(let wordelement of quotebox.childNodes){
            wordelement.className = "";
        }

        quotebox.childNodes[wordindex].className = "highlight";

        inputbox.value = "";
    }else if (currentword.startsWith(inputvalue)){
        inputbox.className = "green";
    } else {
        inputbox.className = "error";
    }
}

btn.addEventListener("click",process);
inputbox.addEventListener("input",typing);