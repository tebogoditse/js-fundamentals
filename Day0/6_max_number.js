function maxNumber(arr)
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

    console.log(arr[arr.length - 1]);
}

maxNumber([3, 7, 2, 9, 1]); //Outputs 9
maxNumber([100, 50, 75])  //Outputs 100