function countChar(str, char)
{
    let count = 0;
    
    let i = 0;
    for (; i < str.length; i++)
    {
        if (char == str[i])
        {
            count = count + 1;
        }
    }

    console.log(count);
}

countChar("hello", "l"); // Output: 2
countChar("mississippi", "s"); // Output: 4