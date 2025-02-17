// check if all numbers in our arrays are multiple of 10 or not.

// let arr = [ 1,2, 3,4 ,5, 6,7,8, 9, 12,13, 14]

// let ans = arr.every((el) => {
//     return el % 10 == 0;
// })
// console.log(ans);



// Create a function to find the min number in an array.

function getMin(nums) {
    let min = nums.reduce((min, el) => {
        if (min < el) {
            return min;
        }else {
            return el;
        }
    });
    return min;
}
let nums = [10,20 ,30 ,40 ,5];