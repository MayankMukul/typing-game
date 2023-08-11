var quotebox = document.querySelector(".quote-box") ;
var message = document.querySelector(".message");
var inputbox = document.querySelector("#input-box");
var btn = document.querySelector("#btn-start");
var output = document.querySelector(".output");
var quotes = ['This is a sample quote1','this is sample quote 2.'];

var randomQuote = function(){
    var index= Math.floor(Math.random() *quotes.length);
    console.log(index);
    return quotes[index];
}
randomQuote();
console.log(randomQuote());