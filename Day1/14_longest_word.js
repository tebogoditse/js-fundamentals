function longestWord(str)
{
    let arr = str.split(" ");

    let i = 0;
    for (; i < arr.length - 1; i++)
    {
        let j = 0;
        for (; j < arr.length - 1; j++)
        {
            if (arr[j].length >= arr[j + 1].length)
            {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log(arr[arr.length - 1]);
}

longestWord("The quick brown fox"); // Output: "quick"
longestWord("JavaScript programming language");  // Output: "programming"