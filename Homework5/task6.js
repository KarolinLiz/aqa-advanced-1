let numbersList = [1,10,14,2,4,5,43,34];
 const numberListCopy = numbersList.concat([]);
 numberListCopy.sort(function (a,b){
    return a-b;
});
console.log(numberListCopy)

// const fruits = ['banana', 'apple', 'orange', 'grape'];
// fruits.sort((a, b) => a.localeCompare(b)); // ['apple', 'banana', 'grape', 'orange']
// console.log(fruits)

// var numbers = [2,7,10,4,1];
// numbers.sort(function (a,b){
//     return a-b;
// });
// console.log(numbers)