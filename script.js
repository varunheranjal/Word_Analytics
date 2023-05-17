///---Below are the Global values for DOM elements which i used in this project. I prefer to bundle them together in one place---//

const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');

//Below is just a function for the Input validation for the field
const inputHandler = () => {
  // example of input validation
  if (textareaEl.value.includes('<script>')) {
    alert("You can't use <script> in your text.");
    textareaEl.value = textareaEl.value.replace('<script>', ''); // additional logic to Remove the invalid value from the Text area
  }

  // Determine the Number/Quantity of 'Numbers' seen in the Text Area Field
  let numberOfWords = textareaEl.value.split(' ').length;
  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }

  const numberOfCharacters = textareaEl.value.length;
  const twitterCharactersLeft = 280 - numberOfCharacters;  // I have hardcoded the Max limit for the No of Characters allowed for a Twitter post to 280
  const facebookCharactersLeft = 2200 - numberOfCharacters;   //// I have hardcoded the Max limit for the No of Characters allowed for a Facebook post to 2200

  //Add a visual indicator if limit is exceeded
  if (twitterCharactersLeft < 0) {
    twitterNumberEl.classList.add('stat__number--limit');
  } else {
    twitterNumberEl.classList.remove('stat__number--limit');
  }

  if (facebookCharactersLeft < 0) {
    facebookNumberEl.classList.add('stat__number--limit');
  } else {
    facebookNumberEl.classList.remove('stat__number--limit');
  }

  // Now set the New numbers
  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
};

textareaEl.addEventListener('input', inputHandler);