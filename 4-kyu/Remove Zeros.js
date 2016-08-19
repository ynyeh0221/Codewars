function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
  
  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc
  
  // the correctly sorted array should be returned.
  let ind = 0;
  let tail = '';
  for (let i = 0; i < array.length; i++)
  {
    if (array[i] === 0)
    {
      tail += '1';
      continue;
    }
    if (array[i] === '0')
    {
      tail += '2';
      continue;
    }
    array[ind] = array[i];
    ind += 1;
  }
  for (let i = ind; i < array.length; i++)
    array[i] = tail[i-ind] == '1' ? 0 : '0';
  return array;
}
