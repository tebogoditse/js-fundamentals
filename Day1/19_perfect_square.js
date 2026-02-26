function perfectSquare(number)
{
    if (number == 0 || number == 1)
        return true;

    let i = 2;
    for (; i <= number / 2; i++)
    {
        if (i * i == number)
            return true;
    }

    return false;
}

console.log(perfectSquare(16)); // Output: true
console.log(perfectSquare(17)); // Output: false
console.log(perfectSquare(9)); // Output: true
console.log(perfectSquare(0)); // Output: true
console.log(perfectSquare(1)); // Output: true
console.log(perfectSquare(45)); // Output: false
