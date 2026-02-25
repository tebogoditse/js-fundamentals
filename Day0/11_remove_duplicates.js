function removeDuplicates(arr)
{
    let newArr = [];

    let i = 0;
    for (; i < arr.length; i++)
    {
        if (newArr.includes(arr[i]) == false)
        {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // Output: [1, 2, 3, 4, 5]
removeDuplicates([5, 5, 5, 1, 1]); // Output: [5, 1]