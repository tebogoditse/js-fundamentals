function removeSpaces(str)
{
    let newStr = "";

    let i = 0;
    for (; i < str.length; i++)
    {
        if (str[i] == " ")
        {
            continue;
        }
        newStr = newStr + str[i];
    }

    console.log(newStr);
}

removeSpaces("Hello World"); // Output: "HelloWorld"
removeSpaces("Java Script is fun"); // Output: "JavaScriptisfun"