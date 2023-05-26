window.addEventListener('load', () =>
{
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