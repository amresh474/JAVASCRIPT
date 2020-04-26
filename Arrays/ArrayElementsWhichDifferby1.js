const solution = (arr) => {
  const set = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] - 1) || set.has(arr[i] + 1)) {
      return true;
    }
  }
  return false;
};

solution([5, 5, 5, 5, 5]); //false
solution([7]); //false
solution([4, 3]); //true
solution([4, 10, 8, 5, 9]); //true
solution([11, 1, 8, 9, 12, 14]); //true
