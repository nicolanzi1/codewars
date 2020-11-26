// function getMiddle(str) {
//   if (str.length % 2 === 1) {
//     position = str.length / 2
//     length = 1
//   } else {
//     position = str.length / 2 - 1
//     length = 2
//   }

//   return str.substring(position, position + length)
// }

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1)
}

console.log(getMiddle('test'), 'es')
console.log(getMiddle('testing'), 't')
console.log(getMiddle('middle'), 'dd')
console.log(getMiddle('A'), 'A')
