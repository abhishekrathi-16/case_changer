const inputText = document.getElementById("input-text")
const result = document.getElementById("result")
const lowerButton = document.getElementById("lower-button")
const upperButton = document.getElementById("upper-button")
const speakButton = document.getElementById("speak")

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

speakButton.addEventListener('click',()=>{
    speak()
})

function speak(){
    const text =  result.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = getFemaleVoice();
    speechSynthesis.speak(utterance);
}

function getFemaleVoice() {
    const voiceIndex = 1;
    return speechSynthesis.getVoices()[voiceIndex];
  }