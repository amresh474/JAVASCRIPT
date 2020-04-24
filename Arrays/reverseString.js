"use strict";
function reverseString(str) {
  if (!str || str.length < 2) {
    return str;
  }
  const bucket = [];
  for (let index = str.lenght - 1; index >= 0; index--) {
    bucket.push(str[index]);
  }
  console.log(bucket);

  return bucket.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse1 = (str) => [...str].reverse().join("");

reverse2("i am amresh kumar");
