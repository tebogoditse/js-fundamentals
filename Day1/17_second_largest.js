function secondLargest(arr)
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

    console.log(arr[arr.length - 2]);
}

secondLargest([10, 5, 8, 12, 3]); // Output: 10
secondLargest([100, 50, 75, 90]); // Output: 90
