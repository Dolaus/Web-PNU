(function(){
  let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
  for (let i=0;i<names.length;i++) {
    if (names[i].toLowerCase().charAt(0)=='j') {
        SpeakGoodbye.speak(names[i]);    
    } else {
      SpeakHello.speak(names[i]);
    }
  }
})();


(function(){
  let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
  console.log("All names end 'l' or 'k'");
  for (const item of names) {
    if (item.toLowerCase().charAt(item.length-1)=='l'||
        item.toLowerCase().charAt(item.length-1)=='k') 
      console.log(item);  
  }
})();