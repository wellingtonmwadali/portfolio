const inputField = document.getElementById("input-field");
const submitButton = document.getElementById("submit-button");
const contentWrapper = document.getElementById("content-wrapper");
//input-form transitions
submitButton.addEventListener("click", function() {
  const inputValue = inputField.value;
  if (inputValue === "1010101") {
    inputField.style.transition = "color 2.5s ease-in-out";
    inputField.style.color = "#000000";
    inputField.value = "******";
    setTimeout(function() {
      inputField.style.color = "#4CAF50";
      inputField.value = "!#@$%*";
      inputField.style.transition = "color 2.5s ease-in-out";
      alert("Almost there!");
      setTimeout(function() {
        inputField.style.color = "#FF0000";
        inputField.value = "MWADALI";
        inputField.style.transition = "color 2.5s ease-in-out";
        setTimeout(function() {
          var inputForm = document.getElementsByClassName("input-form")[0];
          //hide input-form
          inputForm.style.display = "none";
          //display content-wrapper
         contentWrapper.style.display = "block";
        }, 2500);
      }, 2500);
    }, 2500);
  } else {
    alert("Your inability to follow instructions make me sad :(");
  }
});
//page two
//know me button
function toggleContent() {
  var content = document.getElementsByClassName("myIntro")[0];
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
//resize window
function handleWindowResize() {
  const windowWidth = window.innerWidth;
  const normalWindow =document.getElementById("normal-window")
  const largeWindow = document.getElementById("large-window");
  const mediumWindow = document.getElementById("medium-window");
  const smallWindow = document.getElementById("small-window");
  const projectWindow = document.getElementById("project-window");
  //windows
  if (windowWidth >= 1290) {
    normalWindow.style.display = "block";
    largeWindow.style.display = "none";
    mediumWindow.style.display = "none";
    smallWindow.style.display = "none";
    projectWindow.style.display = "none";
  }
  else if (windowWidth >= 1250) {
    normalWindow.style.display = "none";
    largeWindow.style.display = "block";
    mediumWindow.style.display = "none";
    smallWindow.style.display = "none";
    projectWindow.style.display = "none";

  }else if (windowWidth >= 1200) {
    normalWindow.style.display = "none";
    largeWindow.style.display = "none";
    mediumWindow.style.display = "block";
    smallWindow.style.display = "none";
    projectWindow.style.display = "none";
  } else if(windowWidth >=1150){
    normalWindow.style.display = "none";
    largeWindow.style.display = "none";
    mediumWindow.style.display = "none";
    smallWindow.style.display = "block";
    projectWindow.style.display = "none";
  }
  else if(windowWidth >=1100){
    normalWindow.style.display = "none";
    largeWindow.style.display = "none";
    mediumWindow.style.display = "none";
    smallWindow.style.display = "none";
    projectWindow.style.display = "block";
  }
  else{
    normalWindow.style.display = "none";
    largeWindow.style.display = "none";
    mediumWindow.style.display = "none";
    smallWindow.style.display = "none";
    projectWindow.style.display = "none";
  }
}

window.addEventListener("resize", handleWindowResize);
window.onload = function() {
  handleWindowResize();
};
