function minNumber(arr)
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
    console.log(arr[0]);
}

minNumber([3, 7, 2, 9, 1]); // Output: 1
minNumber([100, 50, 75]); // Output: 50