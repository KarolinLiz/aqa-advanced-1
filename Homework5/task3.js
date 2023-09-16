const arrayOfNumbers = [10, 20, 30, 40, 50];
 const sum = arrayOfNumbers.reduce((acc, currentValue)=>{
    acc += currentValue
    return acc
 }, 0)

 console.log(arrayOfNumbers)
 console.log(sum)