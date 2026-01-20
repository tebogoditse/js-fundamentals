let word = "JavaScript";
let newWord = "";

let i = word.length - 1;
for (; i >= 0; i--)
{
    newWord = newWord + word[i];
}

console.log(newWord);