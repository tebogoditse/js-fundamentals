function uppercaseFirst(str)
{
    let newArr = str.split("");
    let first = newArr.shift().toUpperCase().split();

    let i = 0;
    for (; i < newArr.length; i++)
    {
        first.push(newArr[i]);
    }

    console.log(first.join(""));
}

uppercaseFirst("hello"); // Output: "Hello"
uppercaseFirst("javaScript"); // Output: "JavaScript
