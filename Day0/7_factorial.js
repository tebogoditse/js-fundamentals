function factorial(number)
{
    let factorial = 1

    let i = 1;
    for (; i <= number; i++)
    {
        factorial = factorial * i;
    }

    console.log(factorial);
}

factorial(5); // Outputs 120
factorial(4); // Outputs 24