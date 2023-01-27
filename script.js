//Javacript for responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
menuBtn.classList.toggle("active");
navigation.classList.toggle("active");
});

    //sound
    const soundCloud = document.querySelector('.sound-cloud')
    const off = document.querySelector('#off')
    const on = document.querySelector('#on')
    const myAudio = document.querySelector('#myAudio')


    off.addEventListener('click', () => soundTrack('off'))
    on.addEventListener('click', () => soundTrack('on'))


    const soundTrack = (soundState) => {
  if (soundState === 'off') {
    on.style.display = 'block'
    off.style.display = 'none'
    myAudio.play()
  } else if (soundState === 'on') {
    on.style.display = 'none'
    off.style.display = 'block'
    myAudio.pause()
  }
}

//preloader
var preloader = document.getElementById("preloader");

window.addEventListener('load', function() {
  preloader.style.display = 'none';
})

function myFunction() {
  setTimeout(function() {
    preloader.style.display = 'none';
  }, 5000)
};

var countDownDate = new Date("jan 30,2023 00:00:00").getTime();
var x = setInterval(function(){
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
},1000);