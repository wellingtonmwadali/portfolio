
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
    let hours = today.getHours();
    let minutes = today.getMinutes();
    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    let time = hours + ":" + minutes;
    return time;
}

//get the first message
function firstBotMessage(){
    let firstMessage = "Let's have a quick chat";

    document.getElementById("botStarterMessage").innerHTML = '<p class = "botText"><span>'
    + firstMessage + '</span></p>';
    let time = getTime();
    let chatTime = document.getElementById("chat-timestamp")
    chatTime.append(time);
    document.getElementById("userInput").scrollIntoView(false);
}
firstBotMessage();
//retrieves response
function getHardResponse(userText){
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class = "botText"><span>' + botResponse + '</span></p>';
    let botChat = document.getElementById("chatbot")
    botChat.append("botHtml")
    //$("#chatbot").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    setTimeout(() => {
        //nothing
    }, 1000)
}
 //gets text from input box and process it
 function getResponse(){
    //let userText = $("#textInput").val();
    let userText = document.getElementById("textInput").value;
    if (userText == ""){
        userText ="Enter valid text"
    }
    let userHtml = '<p class = "userText"><span>'+ userText + '</span></p>';
    //$("#textInput").val("");
    //$("#chatbox").append(userHtml);
    document.getElementById("textInput").value = "";
    document.getElementById("chatbox").innerHTML += userHtml;
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
 }
 //button clicks
 function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
 }
 //send button function
 function sendButton(){
    getResponse()
 }
 function heartButton() {
    buttonSendText("Heart clicked!")
}
 //send a message
 $("#textInput").keypress(function (e){
    if (e.which == 13) {
        getResponse();
    }
 });

 