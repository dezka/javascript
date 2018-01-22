function chunkArrayInGroups(arr, size) {
  
  var stage = [];
  var sizeTracker = size;
  
  for (var i = 0; i < arr.length; i += size) {
    console.log("wee" + i);
    stage.push(arr.slice(i, sizeTracker));
    sizeTracker += size;
  }
  
  return stage;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
