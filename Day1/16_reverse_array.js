function reverseArray(arr)
{
    let reversedArr = [];

    let i = 0;
    for (; i < arr.length; i++)
    {
        reversedArr.unshift(arr[i]);
    }

    console.log(reversedArr);
}

reverseArray([1, 2, 3, 4, 5]); // Output: [5, 4, 3, 2, 1]
reverseArray(["a", "b", "c"]); // Output: ["c", "b", "a"]
