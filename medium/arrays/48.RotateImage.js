function rotateMatrix(matrix) {
  if (matrix.length <= 1) return matrix;

  for (let nestedArray = 0; nestedArray < matrix.length; nestedArray++) {
    reverseArray(matrix[nestedArray]);
  }
  const currentNum = matrix[0][0];
  const numToSwap = matrix[1][1];
  matrix[0][0] = numToSwap;
  matrix[1][1] = currentNum;
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
