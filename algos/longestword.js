function findLongestWord(str) {

  var cleaned = str.split(" ");
  var largest = [];
  
  for (var i = 0; i < cleaned.length; i++) {
    largest.push(cleaned[i].length);
  }
  
  return Math.max.apply(null, largest);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
