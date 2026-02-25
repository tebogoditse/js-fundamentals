function fizzBuzz(number)
{
    let i = 1;
    for (; i <= number; i++)
    {
        if ((i % 3 == 0) && (i % 5 == 0))
        {
            console.log("FizzBuzz");
        }
        else if (i % 5 == 0)
        {
            console.log("Buzz");
        }
        else if (i % 3 == 0)
        {
            console.log("Fizz");
        }
        else
        {
            console.log(i);
        }
    }
}

fizzBuzz(15);
// Outputs:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz