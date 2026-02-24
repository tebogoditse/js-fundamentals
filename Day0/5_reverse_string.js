function reverseString(word)
{
    let newWord = "";

    let i = word.length - 1;
    for (; i >= 0; i--)
    {
        newWord = newWord + word[i];
    }

    console.log(newWord);
}

reverseString("hello"); // Outputs "olleh"
reverseString("JavaScript"); // Outputs "tpircSavaJ"
