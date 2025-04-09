export const fizzbuzz = (number) => {
    // if (number % 3 == 0) {
    //   if (number % 5 == 0) {
    //     return "FizzBuzz"
    //   }
    //   return "Fizz"
    // }
    // if (number % 5 == 0) {
    //   return "Buzz"
    // }
    // return number

    return (number % 3 ? '' : 'Fizz') + (number % 5 ? '' : 'Buzz') || number;
}