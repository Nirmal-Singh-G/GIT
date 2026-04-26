let sentence = "I love JavaScript";
let result = sentence
  .split(' ')
  .map(word => word.split('').reverse().join(''))
  .join(' ');

console.log(result);
//
let str = "javascript";
let char = "a";
let count = 0;

for (let c of str) {
    if (c === char) {
        count++;
    }
}

console.log(count);