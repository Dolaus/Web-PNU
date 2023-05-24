(function(window){
  let SpeakGoodbye={};
  var speakWord = "Good Bye";


  SpeakGoodbye.speak=function (name) {
    console.log(speakWord + " " + name);
  }

  window.SpeakGoodbye=SpeakGoodbye;
})(window);


