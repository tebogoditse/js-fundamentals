function arraySum(arr)
{
    let i = 0;
    let sum = 0;

    for (; i < arr.length; i++){
        sum = sum + arr[i];
    }

    console.log(sum);
}

arraySum([10, 20, 30]); // Outputs 60
arraySum([1, 2, 3, 4, 5]); // Outputs 15