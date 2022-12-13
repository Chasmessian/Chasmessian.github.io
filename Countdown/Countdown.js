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

  display = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if(i==7){
  makeRandom = randomize(display)
  split = display.split('')
  console.log(split)
  for(i=0;i<3;i++){
    split[makeRandom[i]] = randomUnicode()
  }
  display = split.join('')
  // console.log(display)
  }
  document.getElementById("Countdown").innerHTML = display
  document.getElementById("Countdown").title = display
}, 1000);

function randomize(string){
  splitted = string.split('')
  len = splitted.length
  let r1;
  let r2;
  let r3;
  for(i = 0; i<3; i++){
    let rand = Math.floor(Math.random()*len)
    if(r1==null){
      if(splitted[rand]==" "){
        while(splitted[rand]==" "){
          rand = Math.floor(Math.random()*len)
        }
      }
      r1=rand
    } else if (r2==null){
      let rand2 = rand;
      if(rand==r1||splitted[rand2]==" "){  
        while(rand2 == r1||splitted[rand2]==" "){
          rand2 = Math.floor(Math.random()*len)
        }
      }
      r2 = rand2
    } else if(r3 == null){
      rand3 = rand
      if(rand==r1||rand==r2||splitted[rand3]==" "){
        while(rand3 == r1 ||rand3 == r2||splitted[rand3]==" "){
          rand3 = Math.floor(Math.random()*len)
        }
      }
      r3 = rand3
    }
  }
  randArray = [r1,r2,r3]
  return(randArray)
  }
function randomUnicode(){
  rand = Math.floor(Math.random()*139+8448)
  //from 8448 - 8587
  return("&#" + rand)
}
