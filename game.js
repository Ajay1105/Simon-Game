var buttonColors = ["red", "blue", "green", "yellow"];
var i =1;
$(document).keypress(function(){
    $("h1").text(`level ${i}`);
    nextSquence();
})
var choosenSequence = [];
var randomSequence = [];

$(".box").click(function(){
   var choosenColor = $(this).attr("id");
  
   choosenSequence.push(choosenColor);
   console.log(choosenSequence);
   check();   
})
function nextSquence(){
    var randomNum = Math.floor(Math.random()*4);
    
    var randomColor = buttonColors[randomNum];
    randomSequence.push(randomColor);
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    i++;
    console.log(randomSequence);
}
function check(){
    console.log("i am runnig");console.log(choosenSequence);console.log(randomSequence);
    if (choosenSequence === randomSequence){
        console.log("success");
    }
}