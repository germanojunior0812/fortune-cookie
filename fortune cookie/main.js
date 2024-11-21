
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const fortuneText = document.querySelector('.screen2 h3');
const openButton = document.querySelector('.screen1 button');
const anotherButton = document.querySelector('.screen2 button');


const fortunes = [
  "Seja a mudança que você quer ver no mundo.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "A felicidade não é algo pronto, ela vem de suas ações.",
  "Um sorriso é a chave que abre muitos corações.",
  "Acredite no seu potencial e tudo será possível.",
  "Grandes jornadas começam com pequenos passos.",
  "Confie no processo, a vida sabe o que faz.",
  "Você é mais forte do que imagina.",
  "O universo conspira a favor de quem age com o coração.",
  "Cada dificuldade é uma oportunidade disfarçada."
];


function getRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}


function openFortuneCookie() {
  const fortune = getRandomFortune(); 
  fortuneText.textContent = fortune; 
  screen1.classList.add('hide'); 
  screen2.classList.remove('hide'); 
}


function resetGame() {
  screen1.classList.remove('hide');
  screen2.classList.add('hide'); 
}

//
openButton.addEventListener('click', openFortuneCookie);
anotherButton.addEventListener('click', resetGame);


document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && !screen1.classList.contains('hide')) {
    openFortuneCookie();
  }
});
