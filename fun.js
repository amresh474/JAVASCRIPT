var i = 10;
function funmy() {
  console.log(i);
  let i = 20;
}
funmy();

function funmy1() {
  number = 5;
}
function funmy2(number) {
  number = number * 10;
  console.log(number);
}
funmy1();
funmy2(number);

window.name = "bar";
f = () => {
  this.name = "foo";
};
f();
console.log(name);

console.log("10" + 20 + 30);
name(1, 100);
function name(from, to) {
  var flage = false;
  for ( i = from; i <= to; i++) {
    for ( j = 2; j<i; j++) {
      if (i % j == 0) {
        flage = false;
        break;
      } else {
        flage = true;
      }
    }
    if (flage) {
      console.log(i);
    }
  }
}

primeNumber(1, 100)
function primeNumber(from, to) {
  var flag = false;
  for (i = from; i <= to; i++) {
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = false;
        break;
      }
      else {
        flag = true;
      }
    }
    if (flag) {
      console.log(i);
    }
  }
}

