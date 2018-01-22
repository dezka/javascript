function largestOfFour(arr) {
  
  var largest = [];
  
  for (var i = 0; i < 4; i++) {
    largest.push(Math.max.apply(null, arr[i]));
  }
  
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
