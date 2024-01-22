function merge(arr, left, mid, right) {
    const leftArray = arr.slice(left, mid + 1);
    const rightArray = arr.slice(mid + 1, right + 1);
  
    let i = 0, j = 0, k = left;
  
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] <= rightArray[j]) {
        arr[k] = leftArray[i];
        i++;
      } else {
        arr[k] = rightArray[j];
        j++;
      }
      k++;
    }
  
    while (i < leftArray.length) {
      arr[k] = leftArray[i];
      i++;
      k++;
    }
  
    while (j < rightArray.length) {
      arr[k] = rightArray[j];
      j++;
      k++;
    }
  }
  
  function mergeSort(arr, left, right) {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      mergeSort(arr, left, mid);
      mergeSort(arr, mid + 1, right);
  
      merge(arr, left, mid, right);
    }
  }
  
  module.exports = { merge, mergeSort };
  