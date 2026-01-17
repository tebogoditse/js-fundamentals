let word = "Hello";
let splitWord = word.split('');

let newWord = [];
let i = 0;

for (; i < splitWord.length; i++) {
    newWord.unshift(splitWord[i]);
}

let finalWord = newWord.join('');

console.log(finalWord);