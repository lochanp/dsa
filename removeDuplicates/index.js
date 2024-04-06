function removeDuplicates(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) uniqueArr.push(arr[i]);
  }
  return uniqueArr;
  // return Array.from(new Set(arr));
}
console.log(removeDuplicates(['a', 'b', 'c', 'a']));
