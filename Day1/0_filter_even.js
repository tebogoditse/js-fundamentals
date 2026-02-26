function filterEven(arr)
{
    let evenArr = [];

    let i = 0;
    for (; i < arr.length; i++)
    {
        if (arr[i] % 2 == 0)
        {
            evenArr.push(arr[i]);
        }
    }

    console.log(evenArr);
}

filterEven([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]
filterEven([10, 15, 20, 25]); // Output: [10, 20]