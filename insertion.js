function insertionSort(arr) {
    const len = arr.length;
  
    for (let i = 1; i < len; i++) {
      let currentElement = arr[i];
      let j = i - 1;
  
      // Move elements of arr[0..i-1] that are greater than currentElement to one position ahead
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Place currentElement at its correct position
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  module.exports = insertionSort;
  