function average(arr)
{
    let sum = 0;

    let i = 0;
    for (; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }

    let average = sum / arr.length;

    console.log(average);
}

average([10, 20, 30]) // Output: 20
average([5, 15, 25, 35]) // Output: 20