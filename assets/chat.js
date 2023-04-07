
//toggle effect on chatbot
var collapse = document.getElementsByClassName("collapsible");
for (let i = 0; i < collapse.length; i++){
    collapse[i].addEventListener("click",function(){
       this.classList.toggle("active");
       var content = this.nextElementSibling;
       if (content.style.maxHeight) {
        content.style.maxHeight = null;
       }else{
        content.style.maxHeight = content.scrollHeight + "px";
       }
    });
}
//time for chat
function getTime(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
}
getTime()
//get the first message
function firstBotMessage(){
    let firstMessage = "Let's have a quick chat";

    document.getElementById("botStarterMessage").innerHTML = '<p class = "botText"><span>'
    + firstMessage + '</span></p>';
    let time = getTime();
    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}
firstBotMessage();
//retrieves response
function getHardResponse(userText){
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class = "botText"><span>' + botResponse + '</span></p>';
    $("#chatbot").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}
 //gets text from input box and process it
 function getBotResponse(){
    let userText = $("#textInput").val();

    if (userText == ""){
        userText = "Enter valid text"
    }
    let userHtml = '<p class = "userText"><span>'+ userText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
 }
 //send button function
 function sendButton(){
    buttonSendText("Heart")
 }
 //send a message
 $("#textInput").keypress(function (e){
    if (e.which ==13) {
        getBotResponse();
    }
 });
