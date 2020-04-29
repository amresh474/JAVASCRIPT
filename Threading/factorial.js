// 'use strict';
// console.time("isprime");
// const min = 2;
// const max = 1e7;
// const primes = [];
// function generatePrimes(start, range) {
//   let isPrime = true;
//   let end = start + range;
//   for (let i = start; i < end; i++) {
//     for (let j = min; j < Math.sqrt(end); j++) {
//       if (i !== j && i%j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       primes.push(i);
//     }
//     isPrime = true;
//   }
// }
// generatePrimes(min, max);
// console.log(primes.join('\n'));
// console.timeEnd("isprime");


'use strict';
console.time("isprimewithThread");
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const min = 2;
let primes = [];
function generatePrimes(start, range) {
  let isPrime = true;
  let end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
      if (i !== j && i%j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}
if (isMainThread) {
  const max = 1e7;
  const threadCount = +process.argv[7] ||7 ;
  const threads = new Set();;
  console.log(`Running with ${threadCount} threads...`);
  const range = Math.ceil((max - min) / threadCount);
  console.log(`range===============${range}`);
  
  let start = min;
  for (let i = 0; i < threadCount - 1; i++) {
    const myStart = start;
    threads.add(new Worker(__filename, { workerData: { start: myStart, range }}));
    start += range;
  }
  threads.add(new Worker(__filename, { workerData: { start, range: range + ((max - min + 1) % threadCount)}}));
  for (let worker of threads) {
    worker.on('error', (err) => { throw err; });
    worker.on('exit', () => {
      threads.delete(worker);
      console.log(`Thread exiting, ${threads.size} running...`);
      if (threads.size === 0) {
        console.log(primes.join('\n'));
      }
    })
    worker.on('message', (msg) => {
      primes = primes.concat(msg);
    });
  }
} else {
  generatePrimes(workerData.start, workerData.range);
  console.timeEnd("isprimewithThread");
  parentPort.postMessage(primes);
}

// //sync process
// let i = 0; 
// console.time("dbsave");
// function slowSquare(n){
   
//     while (++i < n * n) {}
   
//     console.timeEnd("dbsave");
//    }

//    slowSquare(100);