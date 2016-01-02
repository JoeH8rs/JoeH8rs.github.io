angular.module('myApp').service('myService', function () {
    
    
    this.saySomething = "Controller.js, App.js and Service.js Conected";
    this.living = ['Monkey', 'Dog', 'Cat', 'Mouse'];
    
    var xhr = new XMLHttpRequest();
xhr.open("GET", "http://smurfs.devmounta.in/smurfs/", false);
xhr.send();

document.getElementById("log1").innerHTML=(xhr.status);
document.getElementById("log2").innerHTML=(xhr.statusText);
    
});