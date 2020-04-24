"use strict";

function mergeSortedArrays(array1, array2) {
  const merageArray = [];
  let i = 1,
    j = 1;
  let array1Item = array1[0];
  let array2Item = array2[0];
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      merageArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      merageArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
}
const merage = mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
console.log(merage);
