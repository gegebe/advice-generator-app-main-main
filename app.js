// ¡Buena suerte!
let dice = document.querySelector(".card__dice");
let cardQuote = document.querySelector(".card__quote");
let quoteNum = document.querySelector("#advice-id");

async function randomAdvice(){

  let response = await fetch("https://api.adviceslip.com/advice");
  console.log(response);

  let transformData = await response.json()
  console.log(transformData);

  return transformData.slip;
}

dice.addEventListener("click", async function(){

  let obtainedAdvice = await randomAdvice();
  
  cardQuote.textContent = obtainedAdvice.advice;
  quoteNum.textContent = obtainedAdvice.id;

});