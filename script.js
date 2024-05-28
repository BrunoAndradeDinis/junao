document.getElementById('button_1').addEventListener('mouseover', function () {
  var button1 = document.getElementById('button_1');
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  var randomX = Math.floor(Math.random() * (screenWidth - button1.offsetWidth));
  var randomY = Math.floor(Math.random() * (screenHeight - button1.offsetHeight));

  button1.style.left = randomX + 'px';
  button1.style.top = randomY + 'px';
})
document.getElementById('button_1').addEventListener('click', function () {
  document.getElementById('button_1').style.display = 'none';
})
document.getElementById('button2').addEventListener('click', function () {
  alert('Já vai se hidratando, que você vai ser inteiramente minha!')
  let url =
      'https://api.whatsapp.com/send?phone=5511956280672&text=Ol%C3%A1%20como%20fa%C3%A7o%20pra%20sentar%20em%20você%20%3F%20'

  window.location.href = url
})