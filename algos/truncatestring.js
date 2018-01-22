function truncateString(str, num) {
  
  var stage = "";
  
  if (num >= str.length) {
    return str;
  } else if (num >= 3) {
    stage = str.slice(0, num - 3) + "...";
  } else if (num < 3) {
    stage = str.slice(0, num) + "...";
  }
  
  return stage;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
