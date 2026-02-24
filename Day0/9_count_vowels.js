function countVowels(s)
{
    let count = 0;

    let i = 0;
    for (; i < s.length; i++)
    {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u')
        {
            count = count + 1;
        }
    }

    console.log(count);
}

countVowels("hello world"); // Outputs 3
countVowels("JavaScript"); // Outputs 3