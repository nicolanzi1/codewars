function century(year) {
  const century = Math.floor(year / 100)
  const decade = year % 100

  if (decade > 0) {
    return century + 1
  }

  return century
}

// function century(year) {
//   return year % 100 > 0 ? Math.floor(year / 100) + 1 : Math.floor(year / 100)
// }

// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)

console.log(century(1705), 18, 'Testing for year 1705')
console.log(century(1900), 19, 'Testing for year 1900')
console.log(century(1601), 17, 'Testing for year 1601')
console.log(century(2000), 20, 'Testing for year 2000')
console.log(century(89), 1, 'Testing for year 89')
