function SumAndAverage(arr)
{
    let sum = 0;

    let i = 0;
    for (; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }

    let average = sum / arr.length;

    console.log("Sum: " + sum + ", Average: " + average);
}

SumAndAverage([10, 20, 30, 40]) // Output: Sum: 100, Average: 25
SumAndAverage([5, 5, 5, 5, 5]) // Output: Sum: 25, Average: 5