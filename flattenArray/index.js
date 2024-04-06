function flattenArray(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flattenArray([1, 3, [5, 1, 2], 6, 4, [2, 1]]));
