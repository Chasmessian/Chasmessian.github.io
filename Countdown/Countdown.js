var countDownDate = new Date("Dec 18, 2022 0:0:0").getTime();


var x = setInterval(function() {

  var now = new Date().getTime();


  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("Countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

}, 1000);
