const inputText = document.getElementById("input-text");
const result = document.getElementById("result");
const lowerButton = document.getElementById("lower-button");
const upperButton = document.getElementById("upper-button");
const speakButton = document.getElementById("speak");

inputText.addEventListener("input", () => {
  result.innerText = inputText.value;
});

// change case
upperButton.addEventListener("click", () => {
  result.innerText = inputText.value.toUpperCase();
  inputText.value = inputText.value.toUpperCase();
});

lowerButton.addEventListener("click", () => {
  result.innerText = inputText.value.toLowerCase();
  inputText.value = inputText.value.toLowerCase();
});

// read aloud when clicked
speakButton.addEventListener("click", () => {
  speak();
});

function speak() {
  const text = result.innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = getVoice();
  console.log(utterance);
  speechSynthesis.speak(utterance);
}

function getVoice() {
  const voiceIndex = 1;
  return speechSynthesis.getVoices()[voiceIndex];
}

// translate the text entered into a language selected by the user
