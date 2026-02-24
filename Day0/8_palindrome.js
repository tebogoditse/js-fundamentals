function palindrome(string)
{
    let original = string.trim().split("");
    let reverse = [];

    let i = 0;
    for (; i < original.length; i++)
    {
        reverse.unshift(original[i]);
    }
    
    let reversedStr = reverse.join("");
    let originalStr = original.join("");

    if (reversedStr === originalStr)
    {
        console.log(string + " is a palindrome");
    } else {
        console.log(string + " is not a palindrome");
    }
}

palindrome("racecar"); // Outputs: "racecar is a palindrome"
palindrome("hello"); // Outputs: "hello is not a palindrome"