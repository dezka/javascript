function titleCase(str) {

  var cleaned = str.toLowerCase().split(" ");
  var destArr = [];
  
  for (var i = 0; i < cleaned.length; i++) {
    var placeHld = cleaned[i].split('');
    placeHld[0] = placeHld[0].toUpperCase();
    destArr.push(placeHld.join(''));
  }
  
  return destArr.join(" ");
}

titleCase("I'm a little tea pot");
