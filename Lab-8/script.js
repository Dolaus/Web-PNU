(function(window){
  let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  for (let i=0;i<names.length;i++) {
    if (names[i].toLowerCase().charAt(0)=='j') {
        SpeakGoodbye.speak(names[i]);    
    } else {
      SpeakHello.speak(names[i]);
    }
  }
  console.log(window);
  
  // var myMap= new Map();
  
  
  // for (const item of names) {
  //     let unicid=0;
  //     for (let index = 0; index < item.length; index++) {
  //       unicid+=item.charCodeAt(index);
  //     }
  //     myMap.set(unicid,item);
  // }
  // console.log(myMap.size);
  // console.log(names.length);  

  for (const item of names) {
    if (item.toLowerCase().charAt(item.length-1)=='l'||
        item.toLowerCase().charAt(item.length-1)=='k') 
      SpeakGoodbye.speak(item);   
  }
})(window);
