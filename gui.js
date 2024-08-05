
let input = "";
let output = document.getElementById("output");

const updateInput = (e) => {
    // upating the input to whatever value gets input // input is a global variable since its written outside of the function I can use it anywhere
    // when you console log the event , you will see a key named target in the object, and when clicked you will see another key that holds the value
    input = e.target.value
}

const pigLatin = (e) => {
    
 input = input.toLowerCase().trim();
  
    const firstVowel = input.match(/[aeiou]/); 
    if (firstVowel == input[0]) {
      return output.innerText = input + "yay"
    }
  
    else {
      const vowelLocation = input.indexOf(firstVowel);
      return output.innerText = input.substring(vowelLocation) + input.substring(0,vowelLocation) + "ay"
    }
  
  }
  