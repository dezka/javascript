function rot13(str) { // LBH QVQ VG!
  
  // A - Z is 65-90
  
  var stage = [];
  
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <=90) {
      
      var num = str.charCodeAt(i);
      
      if (num + 13 <= 90) {
      
        stage.push(String.fromCharCode(num+13));
      
      } else if (num + 13 > 90) {
        
        stage.push(String.fromCharCode(num-13));
      
      }
    } else if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      
      stage.push(String.fromCharCode(str.charCodeAt(i)));
    
    }
  }
  
  return stage.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
