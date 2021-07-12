function convertRomanToInteger(s) {
  const conversion = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    C: 100,
    XC: 90,
    D: 500,
    CD: 400,
    M: 1000,
    CM: 900,
  };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let num;
    const current = s[i];
    const withNext = current + s[i + 1];
    if (conversion[withNext]) {
      num = conversion[withNext];
      i++;
    } else {
      num = conversion[current];
    }

    sum += num;
  }

  return sum;
}

module.exports = convertRomanToInteger;
