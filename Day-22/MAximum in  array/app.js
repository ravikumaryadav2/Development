let arr = [1, 2, 3,4, 5, 6,7 ,2 ,8,4];

// let max = -1;
//  for(let i = 0; i < arr.length; i++){
// if (max < arr [i]) {
//     max = arr[i];
// }
//  }
//  console.log(max);
 
//  let max = arr.reduce((max, el) => {
// if (max < el) {
//     return el;
// }else {
//     return max;
// }
//  });

//  console.log(max);
 


let nums = [2, 3,4,5,6,7,8,1,2];

let result = nums.reduce((max, el) => {
    if (el > max) {
        return el;
    
    }else {
        return max;
    }
});