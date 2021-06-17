function rotateMatrix(matrix) {
  const length = matrix.length;
  if (length <= 1) return matrix;

  for (let nestedArray = 0; nestedArray < length; nestedArray++) {
    reverseArray(matrix[nestedArray]);
  }

  for (let iA = 0, jB = length - 1; iA < length - 1, jB > 0; iA++, jB--) {
    for (let jA = 0, iB = length - 1; jA < jB, iA < iB; jA++, iB--) {
      const currentNum = matrix[iA][jA];
      matrix[iA][jA] = matrix[iB][jB];
      matrix[iB][jB] = currentNum;
    }
  }
  return matrix;
}

function reverseArray(array) {
  for (let i = 0; i < array.length / 2; i++) {
    const currentElement = array[i];
    const indexOfOppositeElement = array.length - 1 - i;
    array[i] = array[indexOfOppositeElement];
    array[indexOfOppositeElement] = currentElement;
  }
}

module.exports = rotateMatrix;
