let botChat = document.getElementById("chatbox");
let userInput = document.getElementById("userInput");
let chatBottom =document.getElementById("chat-bar-bottom")

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
    let firstMessage = "Let's have a quick chat,type 'more' for more info";
    document.getElementById("botStarterMessage").innerHTML = '<p class = "botText"><span>'
    + firstMessage + '</span></p>';
    let time = getTime();
    let chatTime = document.getElementById("chat-timestamp")
    chatTime.append(time);
    userInput.scrollIntoView(false);
}
firstBotMessage();
//retrieves response
function getHardResponse(userText){
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class = "botText"><span>' + botResponse + '</span></p>';
    botChat.innerHTML += botHtml;
    //$("#chatbot").append(botHtml);
    chatBottom.scrollIntoView(true);
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
    document.getElementById("textInput").value = "";
    botChat.innerHTML += userHtml;
    getHardResponse(userText);
 }
 //button clicks
 function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    document.getElementById("textInput").value = "";
    botChat.innerHTML += userHtml;
    chatBottom.scrollIntoView(true);
 }
 //send button function
 function sendButton(){
    getResponse();
 }
 function heartButton() {
    buttonSendText("Thank you :)")
}
 //send a message
 document.getElementById("textInput").addEventListener("keypress", function (event){
    if (event.which === 13) {
        getResponse();
    }
 });

 