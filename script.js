const inputText = document.getElementById("input-text")
const result = document.getElementById("result")
const lowerButton = document.getElementById("lower-button")
const upperButton = document.getElementById("upper-button")

inputText.addEventListener('input',()=>{
    result.innerText = inputText.value
})

upperButton.addEventListener('click',()=>{
    result.innerText = inputText.value.toUpperCase()
    inputText.value = inputText.value.toUpperCase()
})

lowerButton.addEventListener('click',()=>{
    result.innerText = inputText.value.toLowerCase()
    inputText.value = inputText.value.toLowerCase()
})