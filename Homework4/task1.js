//  //function Declaration
function calculateArea(width, height) {
    const square = width * height;
    return square
   
    }
     console.log(calculateArea(5,10))


//function Expression
const calculateArea2 = function(width, height) {
    const square = width * height;
    return square
   
    }
    console.log(calculateArea2(5,10))
   
//Arrow function expression
const calculateArea3 =  (width,height) => {
   const square = width * height;
   return square
}
console.log(calculateArea3(5,10))
