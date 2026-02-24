let arr = [3, 7, 2, 9, 1];
//let arr = [100, 50, 75];

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