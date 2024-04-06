function arraySum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log(arraySum([2, 2, 2, 2]));

function arraySum1(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + arraySum1(nums.slice(1));
}

console.log(arraySum1([2, 2, 2, 2]));
