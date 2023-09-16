function countToZero(num){
    console.log(num)
    if (num<=1 ){
        return 
    }
    countToZero(num-1)
}
countToZero(5)