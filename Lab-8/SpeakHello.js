(function(window){
  let SpeakHello={};
  var speakWord = "Hello";


  SpeakHello.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.SpeakHello = SpeakHello;

})(window);


