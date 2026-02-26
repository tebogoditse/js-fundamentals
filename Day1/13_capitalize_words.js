function capitalizeWords(str)
{
    let newStr = str[0].toUpperCase();

    let i = 1;
    for (; i < str.length; i++)
    {
        if (str[i - 1] == " ")
        {
            newStr = newStr + str[i].toUpperCase();
        }
        else
        {
            newStr = newStr + str[i];
        }
    }

    console.log(newStr.trim());
}

capitalizeWords("hello world"); // Output: "Hello World"
capitalizeWords("javascript is awesome"); // Output: "Javascript Is Awesome"
capitalizeWords("  javascript is fun"); // Output: "Javascript Is Fun"