let data = [
  1, 1, 2, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 1,
  2, 3, 4, 5, 6, 7,
];

function mode(arr) {
  let obj = {};
  let mode;
  let maxNum;

  for (let count of arr) {
    obj[count] = (obj[count] || 0 )+ 1;
  }
  return obj;
}

console.log(mode(data));
