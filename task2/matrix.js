const getMatrices = (input, width, height) => {
  const matrices = [];
  const n = Math.floor(input.length / (width * height));

  for (let k = 0; k < n; k++) {
    let matrix = [];
    for (let i = 0; i < height; i++) {
      matrix[i] = [];
      for (let j = 0; j < width; j++) {
        matrix[i][j] = input[k*width*height + i*width + j]
      }
    }

    matrices.push(matrix);
  }

  return matrices;
};

const combine = (matrices, width, height) => {
  const result = [];

  for (let i = 0; i < height; i++) {
    result[i] = [];
    for (let j = 0; j < width; j++) {
      result[i][j] = matrices.reduceRight((color, matrix) => {
        if (['0', '1'].includes(matrix[i][j])) {
          return matrix[i][j];
        }

        if (matrix[i][j] === '2') {
          return color;
        }

        throw new Error();
      }, '2');
    }
  }

  return result;
}

export { getMatrices, combine };
