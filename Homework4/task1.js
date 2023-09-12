//  //function Declaration
function area(width, height) {
    let square = width * height;
    console.log(`The area of the rectangle is ${square}`)
   
    }
     result=area(5,10)


//function Expression
const area2 = function(width, height) {
    let square = width * height;
   console.log(`The area of the rectangle is ${square}`)
   
    }
    result=area2(5,10)
   
//Arrow function expression
const area3 =  (width,height) => {
   const square = width * height;
   return square
}
console.log(`The area of the rectangle is ${area3(5,10)}`)
