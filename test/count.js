function getSum(capital, rate, years) {
  let total = capital
  for(let i = 0; i < years; i++) {
    total = total + total * rate
    console.log(total);
  }
  return total
}

getSum(1200, 0.2, 30)