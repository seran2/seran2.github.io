window.onload = () => {
  const play1 = document.getElementById("play1")
  const pause1 = document.getElementById("pause1")
  const music1 = document.getElementById("faf7"); 
  const play2 = document.getElementById("play2")
  const music2 = document.getElementById("c123"); 
  const play3 = document.getElementById("play3")
  const music3 = document.getElementById("arab");
  const play4 = document.getElementById("play4")
  const music4 = document.getElementById("piano"); 
  const play5 = document.getElementById("play5")
  const music5= document.getElementById("everlast"); 


  play1.addEventListener('click', function play1() {
    music1.play(); 
    music2.pause();
    music3.pause();
    music4.pause();
    music5.pause();
  })

  pause1.addEventListener('click', function pause1() {
    music1.pause(); 
    music2.pause();
    music3.pause();
    music4.pause();
    music5.pause();
  })

  play2.addEventListener('click', function play2() {
    music2.play();
    music1.pause();
    music3.pause();
    music4.pause();
    music5.pause();
  })

  play3.addEventListener('click', function play3() {
    music3.play();
    music2.pause();
    music1.pause();
    music4.pause();
    music5.pause();
  })


  play4.addEventListener('click', function play4() {
    music4.play()
    music2.pause();
    music3.pause();
    music1.pause();
    music5.pause();
  })

  play5.addEventListener('click', function play5() {
    music5.play(); 
    music2.pause();
    music3.pause();
    music4.pause();
    music1.pause();
  })
}