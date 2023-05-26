window.addEventListener('load', () => {

    Swal.fire({

        title: 'Do you want to play music in the background?',

        // text: "You won't be able to revert this!",

        icon: 'warning',

        showCancelButton: true,

        confirmButtonColor: '#3085d6',

        cancelButtonColor: '#d33',

        confirmButtonText: 'Yes',

        cancelButtonText: 'No',

    }).then((result) => {

        if (result.isConfirmed) {

            document.querySelector('.song').play();

            animationTimeline();

        } else {

            animationTimeline();

        }

    });

});



const quoteArea = document.querySelector('.quote-area');

const btnLanjutQ = document.querySelector('.btn2');
btnLanjutQ.addEventListener('click',function quoteNext1() {
  quoteArea.innerHTML = `"Pada hari ulang tahunmu,aku memiliki seribu kata yang di rencanakan tapi kemudian aku menemukan tiga kata untuk merangkum semuanya.<br>AKU CINTA KAMU"`;
  const btmLanjut2 = document.querySelector('.btn3');
  btnLanjutQ.style.display = 'none';
  btmLanjut2.style.display = 'block'
});
const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove()
  }, 500)
}

window.addEventListener("load", () => {
  createBalloons(30)
});

//window.addEventListener("click", () => {
 // removeBalloons();
//});
