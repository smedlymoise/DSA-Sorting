function pivot(arr, start = 0, end = arr.length - 1) {
    const pivotValue = arr[start];
    let pivotIndex = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivotValue) {
        pivotIndex++;
        // Swap arr[i] and arr[pivotIndex]
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      }
    }
  
    // Swap pivotValue with arr[pivotIndex]
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  
    return pivotIndex;
  }
  
  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      const pivotIndex = pivot(arr, left, right);
  
      // Recursively sort the sub-arrays
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
  
    return arr;
  }
  
  module.exports = { pivot, quickSort };
  