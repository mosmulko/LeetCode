function convertRomanToInteger(s) {
  const conversion = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const roman = s[i];
    sum += conversion[roman];
  }

  return sum;
}

module.exports = convertRomanToInteger;
