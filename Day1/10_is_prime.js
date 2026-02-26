function isPrime(number)
{
    if (number <= 1)
        return false;

    let i = 2;
    for (; i <= number / 2; i++)
    {
        if (number % i == 0)
        {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(0)); // Output: false
console.log(isPrime(1)); // Output: false
console.log(isPrime(11)); // Output: true