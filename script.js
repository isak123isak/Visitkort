// Henter ting fra Html
const visitcard = document.querySelector('#visitcard');

console.log(visitcard);
// Denne funskjonen skifter hvilken klasse som er på Div flightcard
function removeflightcard() {
  const flightcard = document.querySelector('#flightcard');
  console.log(flightcard);
  flightcard.classList.toggle("hidden");
}
// Lagt til hendelse som aktiverer funskjon
const btn1 = document.querySelector('#btn1');
console.log(btn1);
btn1.addEventListener('click', removeflightcard);
