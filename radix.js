function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  function countSort(arr, exp) {
    const output = new Array(arr.length);
    const count = new Array(10).fill(0);
  
    for (let i = 0; i < arr.length; i++) {
      count[Math.floor(arr[i] / exp) % 10]++;
    }
  
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
      count[Math.floor(arr[i] / exp) % 10]--;
    }
  
    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
    }
  }
  
  function radixSort(arr) {
    const max = getMax(arr);
  
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      countSort(arr, exp);
    }
  
    return arr;
  }
  
  module.exports = radixSort;
  