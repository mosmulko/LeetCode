function findIntersection(first, second) {
  if (first.length === 0 || second.length === 0) return [];
  const numsFromFirst = {};
  first.forEach((num) => {
    numsFromFirst[num] ? numsFromFirst[num]++ : (numsFromFirst[num] = 1);
  });
  const intersection = [];
  second.forEach((num) => {
    if (numsFromFirst[num]) {
      intersection.push(num);
      numsFromFirst[num]--;
    }
  });
  return intersection;
}

module.exports = findIntersection;
