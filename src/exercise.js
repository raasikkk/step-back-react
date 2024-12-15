// Challenge 1

function fizzBuzz() {
  let arr = [];

  for (let i = 1; i < 21; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else {
      arr.push(i);
    }
  }
  console.log(arr);
}

fizzBuzz();

// Challenge 2

function unique(arr) {
  return [...new Set(arr)];
}

const arr = ["green", "red", "blue", "red"];
const newArr = unique(arr);

console.log(newArr);

// Challenge 3
function minMax(nums) {
  if (nums.length === 0) {
    return {
      max: null,
      min: null,
    };
  } else if (nums.length === 1) {
    return {
      max: nums[0],
      min: nums[0],
    };
  }

  let largest = nums[0];
  let smallest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
    if (nums[i] < smallest) {
      smallest = nums[i];
    }
  }
  return {
    max: largest,
    min: smallest,
  };
}

console.log(minMax([3]));
