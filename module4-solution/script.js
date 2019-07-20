
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (name in names) {

  if ((names[name].charAt(0)).toLowerCase() == 'j') {
    byeSpeaker.sayBye(names[name]);
  } else {
    helloSpeaker.sayHello(names[name]);
  }
}



})();
