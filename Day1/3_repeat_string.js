function repeatStr(str, times)
{
    let newStr = "";

    let i = 1;
    for (; i <= times; i++)
    {
        newStr = newStr + str;
    }

    console.log(newStr);
}

repeatStr("ha", 3); // Output: "hahaha"
repeatStr("code", 2) // Output: "codecode"