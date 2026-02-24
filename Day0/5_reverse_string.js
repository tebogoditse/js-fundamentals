function reverseString(word)
{
    let original = word.trim();
    let reverse = [];

    let i = 0;
    for (; i < original.length; i++)
    {
        reverse.unshift(original[i]);
    }

    let reversedStr = reverse.join("");

    console.log(reversedStr);
}

reverseString("hello"); // Outputs "olleh"
reverseString("JavaScript"); // Outputs "tpircSavaJ"
