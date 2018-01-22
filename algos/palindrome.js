function palindrome(str) {
  
  var cleaned = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  var reversed = cleaned.split('').reverse().join('');
  
  if (cleaned == reversed) {
    return true;
  } else {
    return false;
  }
  
}



palindrome("eye");
