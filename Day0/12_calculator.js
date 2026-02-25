function calculator(a, op, b)
{
    let result;

    if (op == '+')
    {
        result = a + b;
    }
    else if (op == '-')
    {
        result = a - b;
    }
    else if (op == '*')
    {
        result = a * b;
    }
    else if (op == '/')
    {
        result = a / b;
    }
    else
    {
        result = "Invalid input!";
    }

    console.log(result);
}

calculator(10, '+', 5); // Output: 15
calculator(20, '-', 8) // Output: 12
calculator(6, '*', 7) // Output: 42
calculator(15, '/', 3) // Output: 5
calculator(18, '@', 6) // Output: "Invalid input!"