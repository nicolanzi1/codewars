function similarLicensePlates(plate1, plate2) {
  const similar = {
    0: 'O',
    Q: 'O',
    1: 'I',
    T: 'I',
    2: 'Z',
    5: 'S',
    8: 'B',
  }

  let result = []
  let arr2 = plate2.split('')
  arr2.forEach((char, i) => {
    for (let j in similar) {
      if (char[i] === similar[j]) {
        result.push(similar[j])
      } else {
        result.push(char[i])
      }
    }
  })

  return plate1.split('').every((char) => {
    return result.includes(char) ? true : false
  })
}

console.log(similarLicensePlates('ABC', 'DEF'), false)
console.log(similarLicensePlates('AAA', 'A A A'), true)
console.log(similarLicensePlates('BOX', 'B0X'), true)
console.log(similarLicensePlates('BIZ', '812'), true)
