function destroyer(arr) {
  
  var args = Array.prototype.slice.call(arguments);
  var stage = args[0];
  var destroy = args.slice(1);
  
  function filterVals(item) {
    return !destroy.includes(item);
  }
  
  return stage.filter(filterVals);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
