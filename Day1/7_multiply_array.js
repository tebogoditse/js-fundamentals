function multiplyArray(arr)
{
    let product = 1;

    let i = 0;
    for (; i < arr.length; i++)
    {
        product = product * arr[i];
    }

    console.log(product);
}

multiplyArray([2, 3, 4]); // Output: 24
multiplyArray([5, 2, 3]); // Output: 30