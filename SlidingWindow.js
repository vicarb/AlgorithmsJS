function maxSumOfElements(arr, p){
  let max = 0;
  let sum = 0;
  
  let i = 0;
 
  while(i < p){
    sum = sum + arr[i];
    i++;
  }
  max = sum
  i = p;
  
  while( i < arr.length){
    sum += arr[i] - arr[i-p];
    if(sum > max) {
      max = sum;
      }
      i++;
   }
   return max;
}

let arr = [8, 4, 1, 2, 5, 6];
let maxSum = maxSumOfElements(arr, 2);

console.log(maxSum)
