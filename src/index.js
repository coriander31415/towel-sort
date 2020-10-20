module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    return matrix
        .map((val, row) =>
            (row % 2 === 0) ? val : val.reverse())
        .flat();
}
