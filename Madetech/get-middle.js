function getMiddle(str) {
  if (str.length % 2 === 1) {
    position = str.length / 2
    length = 1
  } else {
    position = str.length / 2 - 1
    length = 2
  }

  return str.substring(position, position + length)
}

console.log(getMiddle('test'), 'es')
console.log(getMiddle('testing'), 't')
console.log(getMiddle('middle'), 'dd')
console.log(getMiddle('A'), 'A')
