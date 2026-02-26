function stringContains(original, part)
{
    let strPart = part.trim();

    let result = false;

    if (original.includes(strPart))
    {
        result = true;
    } else
    {
        result = false;
    }

    console.log(result);
}

stringContains("Hello World", "World"); // Output: true
stringContains("Hello World", "World  "); // Output: true
stringContains("JavaScript", "Python"); // Output: false