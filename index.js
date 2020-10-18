

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(6))+1;
}



function myFunction() {
  play();
  P1=getRandomInt();
  P2=getRandomInt();
  if(P1==1)
  document.getElementById('myImage1').src='one.png'
  if(P1==2)
  document.getElementById('myImage1').src='two.png'
  if(P1==3)
  document.getElementById('myImage1').src='three.png'
  if(P1==4)
  document.getElementById('myImage1').src='four.png'
  if(P1==5)
  document.getElementById('myImage1').src='five.png'
  if(P1==6)
  document.getElementById('myImage1').src='six.png'

  if(P2==1)
  document.getElementById('myImage2').src='one.png'
  if(P2==2)
  document.getElementById('myImage2').src='two.png'
  if(P2==3)
  document.getElementById('myImage2').src='three.png'
  if(P2==4)
  document.getElementById('myImage2').src='four.png'
  if(P2==5)
  document.getElementById('myImage2').src='five.png'
  if(P2==6)
  document.getElementById('myImage2').src='six.png'

if(P1>P2){
  document.getElementById("winner").innerHTML = "Player 1 is the winner"
}
else if (P1<P2){
  document.getElementById("winner").innerHTML = "Player 2 is the winner"
}
else if (P1==P2){
  document.getElementById("winner").innerHTML = "No One Won!!"
}
}

function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }
