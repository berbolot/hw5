function getALLSum2(...nums) {
   
    let sum = nums.reduce((a, b) => a+= b)/2
    console.log(sum);
}

getALLSum2(4, 4, 4, 4, 4)
