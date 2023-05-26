const quoteArea = document.querySelector('.quote-area');

const btnLanjutQ = document.querySelector('.btn2');
btnLanjutQ.addEventListener('click',function quoteNext1() {
  quoteArea.innerHTML = `"Pada hari ulang tahunmu,aku memiliki seribu kata yang di rencanakan tapi kemudian aku menemukan tiga kata untuk merangkum semuanya.<br>AKU CINTA KAMU"`;
  const btmLanjut2 = document.querySelector('.btn3');
  btnLanjutQ.style.display = 'none';
  btmLanjut2.style.display = 'block'
});
