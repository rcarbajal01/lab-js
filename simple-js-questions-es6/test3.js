function showLuckyNumber(doubleIt) {
  const dateNow = new Date();
  const luckyNumber = Math.ceil(Math.random() * 100);
  const winningsText = doubleIt ? 'and wins double!' : 'and wins'
  console.log(`${dateNow} - The lucky number is ${luckyNumber} ${winningsText}`);
}

// 1. Create a function that will call showLuckyNumber every 5 seconds
// 2. Create a function that will call showLuckyNumber every 10 seconds and will pass it a value true (doubleIt to be true)
// 3. After 30 seconds, both functions should stop
