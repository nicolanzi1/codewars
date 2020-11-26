const withdraw = (amount) => {
  var result = [0, 0, 0]
  var remainder = amount % 100
  result[0] =
    (remainder === 10 || remainder === 30) && amount >= 100
      ? ((amount / 100) | 0) - 1
      : (amount / 100) | 0
  amount -= result[0] * 100
  result[1] = amount % 20 === 0 ? 0 : amount < 50 ? 0 : 1
  amount -= result[1] * 50
  result[2] = (amount / 20) | 0
  return result
}

console.log(withdraw(40), [0, 0, 2])
console.log(withdraw(250), [2, 1, 0])
console.log(withdraw(260), [2, 0, 3])
console.log(withdraw(230), [1, 1, 4])
console.log(withdraw(60), [0, 0, 3])
