var dayItem = document.querySelector("#days")
var hoursItem = document.querySelector("#hours")
var minItem = document.querySelector("#min")
var secItem = document.querySelector("#secs")

var coutdown = setInterval(function (){
    var futureDate = new Date("6/16/2024");
    var currentDate = new Date();
    var myDate = futureDate - currentDate;

    var days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    var hours = Math.floor(myDate / 1000 / 60 / 60 ) % 24;
     var mins = Math.floor(myDate / 1000 / 60 ) % 60;
     var sec = Math.floor(myDate / 1000 ) % 60;

     dayItem.innerHTML = days;
     hoursItem.innerHTML = hours;
     minItem.innerHTML = mins;
     secItem.innerHTML = sec;
     
},10)


