// var data = ajax( "http://some.url.1" );
// console.log( data );

// function now() {
//   return 42;
// }

// function later() {
//   answer = answer * 2;
//   console.log(`Meaning of life ${answer}`);
// }

// let answer = now();
// setTimeout(later, 10000);

// doA(function() {
//   doB();
//   doC(function() {
//     doD();
//   });
//   doE();
// });
// doF();

const expected = true;
function compare(actual, success, failure) {
  if (actual === expected) {
    success();
  } else {
    failure();
  }
}
function onSuccess() {
  console.log("Value was expected");
}
function onFailure() {
  console.log("Value was unexpected/exceptional");
}
compare(true, onSuccess, onFailure);
compare(false, onSuccess, onFailure);
