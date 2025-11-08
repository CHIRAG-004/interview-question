const fn = require('./mergeTime');

const example1 = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
console.log(fn.mergeTimeRanges(example1, 200));
// Expected: [ [1000, 2000], [2500, 4100], [8000, 9500] ]

const example2 = [
  [0, 10],
  [15, 20],
  [25, 30]
];
console.log(fn.mergeTimeRanges(example2, 4));
// Expected: [ [0, 10], [15, 20], [25, 30] ]

const example3 = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
console.log(fn.mergeTimeRanges(example3, 3));
// Expected: [ [0, 35] ]
