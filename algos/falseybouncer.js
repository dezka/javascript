function bouncer(arr) {
  
  function filterFalsy(item) {
    if (!item || typeof item == 'string' || typeof item == 'number') {
      return item;
    }
  }

  return arr.filter(filterFalsy);
  
}

bouncer([7, "ate", "", false, 9]);
