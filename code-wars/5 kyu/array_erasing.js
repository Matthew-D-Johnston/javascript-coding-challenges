function arrayErasing(array) {
  
}




function findIndexes(idx, array) {
  let indexes = [];
  let matchElement = array[idx];
  
  for (let i = idx; i >= 1; i -= 1) {
    if (array[i - 1] !== matchElement) {
      indexes.push(i);
    	break;
    }
  }
  
  for (let i = idx; i <= array.length - 2; i += 1) {
    if (array[i + 1] !== matchElement) {
      indexes.push(i);
      break;
    }
  }
  
  return indexes;
}