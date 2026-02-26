function twoSum(array, targetSum)
{
    let i = 0;
    for (; i < array.length; i++)
    {
        j = i + 1;
        for (; j < array.length; j++)
        {
            if (array[i] + array[j] == targetSum)
            {
                return true;
            }
        }
    }

    return false;
}

console.log(twoSum([2, 7, 11, 15], 9)) // Output: true
console.log(twoSum([1, 2, 3], 10)) //Output: false
console.log(twoSum([2, 7, 11, 15], 11)) // Output: false
console.log(twoSum([2, 7, 11, 15], 26)) // Output: true