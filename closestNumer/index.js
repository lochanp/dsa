function findClosestNumber(arr, target) {
  let closest = arr[0]; // Initialize closest to the first element of the array

  for (let i = 1; i < arr.length; i++) {
    // Calculate the absolute difference between the current element and the target
    const diffCurrent = Math.abs(arr[i] - target);
    // Calculate the absolute difference between the closest number found so far and the target
    const diffClosest = Math.abs(closest - target);

    // Update the closest number if the current element is closer to the target
    if (diffCurrent < diffClosest) {
      closest = arr[i];
    }
  }

  return closest;
}

// Example usage:
const a = [1, 4, 3, 5];
const target = 2;
const nearestNumber = findClosestNumber(a, target);
console.log(nearestNumber); // Output: 1
