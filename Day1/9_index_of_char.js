function indexOfChar(str, char)
{
    let index_of_char;

    let i = 0;
    for (; i < str.length; i++)
    {
        if (char == str[i])
        {
            index_of_char = i;
            break;
        }
    }

    console.log(index_of_char);
}

indexOfChar("hello", "l"); // Output: 2
indexOfChar("javascript", "s"); //Output: 4
