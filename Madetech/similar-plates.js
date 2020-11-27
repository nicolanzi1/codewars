function similarLicensePlates(plate1, plate2) {
  let similar = ['0', 'O', 'Q', '1', 'I', 'T', '2', 'Z', '5', 'S', '8', 'B']

  let arr = plate1.concat(plate2).replace(/\s+/g, '').split('')

  let result = []
  arr.forEach((e1) =>
    similar.forEach((e2) => {
      if (e1 === e2) {
        result.push(e1)
      }
    })
  )
  return result.length % 2 === 0 ? true : false
}

console.log(similarLicensePlates('ABC', 'DEF'), false)
console.log(similarLicensePlates('AAA', 'A A A'), true)
console.log(similarLicensePlates('BOX', 'B0X'), true)
console.log(similarLicensePlates('BIZ', '812'), true)
