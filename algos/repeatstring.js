function repeatStringNumTimes(str, num) {
  
  if (num >= 0) {
    return str.repeat(num);
  } else if (num < 0) {
    return "";
  }
 
}

repeatStringNumTimes("abc", 3);
