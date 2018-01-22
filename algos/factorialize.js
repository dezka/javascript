function factorialize(num) {
  
  var stage = [];
  
  if (num === 0) {
    return 1;
  }
  
  for (var i = 1; i <= num; i++) {
    stage.push(i);
  }
  
  var arr = stage.reduce(function(previousVal, currentVal) {
    return previousVal * currentVal;
  });
  
  return arr;
}

factorialize(5);
