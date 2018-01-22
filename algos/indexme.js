function getIndexToIns(arr, num) {
  
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });
  
  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] >= num) {
      return i;
    }
  }
  return sorted.length;
}

getIndexToIns([2, 5, 10], 15);
