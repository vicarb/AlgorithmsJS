 //Bubble Sort Algorithm
 //Time Complexity: O(n^2),which is quite high, not recommended for large data sets

function bubbleSort(array){
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = length - 1; j > i; j--){
      if(array[j] < array[j-1]){
        let aux = array[j]
        array[j] = array[j-1]
        array[j-1] = aux
	//checks if the current value is smaller than the previous element, if the condition is met do the swap
      }
    }
  }
  return array;
}

arr = [4,6,2,1,5,9,10,9,8,9]
console.log(bubbleSort(arr))
