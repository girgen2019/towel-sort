
// You should implement your task here.

module.exports = function towelSort(matrix) {
  const arr = [];

  if (matrix === undefined || matrix.length === 0){
    return [];
  } 

  for (let i = 0 ; i < matrix.length ; i += 1) {
    if (i % 2 == 0) {
      for (let j = 0; j < matrix[i].length; j += 1) {
        arr.push(matrix[i][j]);
      }
    } else {
      const reversedMatrix = matrix[i].reverse();
      for (let j = 0; j < matrix[i].length; j += 1) {
        arr.push(reversedMatrix[j]);
      }
    }
  }
  return arr;
};