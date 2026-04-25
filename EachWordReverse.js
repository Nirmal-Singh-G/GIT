let sentence = "I love JavaScript";
let result = sentence
  .split(' ')
  .map(word => word.split('').reverse().join(''))
  .join(' ');

console.log(result);