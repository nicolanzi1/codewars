// function accum(input) {
//   // a place to store the result
//   let result = ''
//   //  iterate over the string
//   for (let i = 0; i < input.length; i++) {
//     // append the current letter i + 1 times to the string
//     for (let j = 0; j < i + 1; j++) {
//       // capitalize the first append
//       if (j == 0) {
//         result += input[i].toUpperCase()
//       } else {
//         result += input[i].toLowerCase()
//       }
//     }

//     // append a dash if it is not the last letter
//     if (i != input.length - 1) {
//       result += '-'
//     }
//   }

//   return result
// }

// function accum(input) {
//   // a place to store the result
//   let result = ''
//   //  iterate over the string
//   for (let i = 0; i < input.length; i++) {
//     const currentLetter = input[i]
//     // append the current letter i + 1 times to the string
//     const totalCount = i + 1
//     for (let counter = 0; counter < totalCount; counter++) {
//       // capitalize the first append
//       if (counter == 0) {
//         result += currentLetter.toUpperCase()
//       } else {
//         result += currentLetter.toLowerCase()
//       }
//     }

//     // append a dash if it is not the last letter
//     if (i != input.length - 1) {
//       result += '-'
//     }
//   }

//   return result
// }

// function accum(input) {
//   return input.split('').reduce((result, currentLetter, i) => {
//     const totalCount = i + 1
//     for (let counter = 0; counter < totalCount; counter++) {
//       if (counter == 0) {
//         result += currentLetter.toUpperCase()
//       } else {
//         result += currentLetter.toLowerCase()
//       }
//     }

//     if (i != input.length - 1) {
//       result += '-'
//     }
//     return result
//   }, '')
// }

function accum(input) {
  return input.split('').reduce((result, currentLetter, i) => {
    const totalCount = i + 1
    for (let counter = 0; counter < totalCount; counter++) {
      if (counter == 0) {
        result += currentLetter.toUpperCase()
      } else {
        result += currentLetter.toLowerCase()
      }
    }

    if (i != input.length - 1) {
      result += '-'
    }
    return result
  })
}

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

console.log(
  accum('ZpglnRxqenU'),
  'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
)
console.log(
  accum('NyffsGeyylB'),
  'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
)
console.log(
  accum('MjtkuBovqrU'),
  'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'
)
console.log(
  accum('EvidjUnokmM'),
  'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm'
)
console.log(
  accum('HbideVbxncC'),
  'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc'
)
