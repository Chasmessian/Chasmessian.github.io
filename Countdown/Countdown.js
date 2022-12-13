var countDownDate = new Date("Dec 18, 2022 0:0:0").getTime();
var audio = new Audio('Countdown/heartbeat.mp3');
// Update the count down every 1 second

var i = 0
var x = setInterval(function() {

  i = i+1

  if(i==30){
    document.getElementById('Countdown').click();
    i=0
  }
  if(i%2==0){
    audio.play()
  }

  var now = new Date().getTime();

  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("Countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("Countdown").title = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);
