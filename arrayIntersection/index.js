function arrayIntersection(arr1, arr2) {
  const intersectionArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) || !intersectionArr.includes(arr1)) {
      intersectionArr.push(arr1[i]);
    }
  }
  return intersectionArr;
}

// function arrayIntersection(arr1, arr2) {
//   const set1 = new Set(arr1);
//   const intersectionArr = [];
//   for (let num of arr2) {
//     if (set1.has(num)) {
//       intersectionArr.push(num);
//     }
//   }
//   return intersectionArr;
// }

console.log(arrayIntersection([1, 4, 3, 5, 2], [1, 2, 4, 3, 7]));
