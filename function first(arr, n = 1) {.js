function first(arr, n = 1) {
  if (n === 0) {
    return [];
  } else {
    return arr.slice(0, n);
  }
}

var arr = ["a", "b", "c", "d", "e"];
console.log(first(arr)); // ['a']
console.log(first(arr, 2)); // ['a', 'b']
console.log(first(arr, 3)); // ['a', 'b', 'c']
console.log(first(arr, 0)); // []
