function mySlice(arr, start, end) {
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}

function myIndexOf(arr, item, from) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) { return i;}
  }
}

function myIncludes(arr, item, from) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) { return true;}
  }
  return false;
}
