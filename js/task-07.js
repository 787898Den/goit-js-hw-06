const textSpan = document.querySelector(`#text`)
const input = document.querySelector(`#font-size-control`)
console.log (input)
console.log(textSpan.textContent)
input.addEventListener (`change`,function(){
    textSpan.style.fontSize = input.value + "px"
});