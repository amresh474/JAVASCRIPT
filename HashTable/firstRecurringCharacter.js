function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} //o(n^2)

function firstRecurringCharacter1(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    // console.log(map);

    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  return undefined;
}

console.log(firstRecurringCharacter1([7, 3, 1, 5, 4, 9, 8, 2, 1, 0]));
