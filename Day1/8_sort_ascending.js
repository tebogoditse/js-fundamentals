function sortAscending(arr)
{
    let i = 0;
    for (; i < arr.length - 1; i++)
    {
        let j = 0;
        for (; j < arr.length - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                arr[j] = arr[j] + arr[j + 1];
                arr[j + 1] = arr[j] - arr[j + 1];
                arr[j] = arr[j] - arr[j + 1];
            }
        }
    }
    console.log(arr);
}

sortAscending([5, 2, 8, 1, 9]) // Output: [1, 2, 5, 8, 9]
sortAscending([3, 1, 4, 1, 5]) // Output: [1, 1, 3, 4, 5]