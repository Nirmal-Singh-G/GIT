let sentence = "I love JavaScript";
let result = sentence
  .split(' ')
  .map(word => word.split('').reverse().join(''))
  .join(' ');

console.log(result);
//
let str = "JavaScript";
let count = 0;

for (let char of str.toLowerCase()) {
    if ("aeiou".includes(char)) {
        count++;
    }
}

console.log(count);