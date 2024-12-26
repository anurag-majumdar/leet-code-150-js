/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0]);
    const merged = [];
    let minArrows = 1;
    points.forEach((point) => {
        const lastPoint = merged[merged.length - 1];
        if (merged.length === 0 || lastPoint[1] <= point[0]) {
            merged.push(point);
            minArrows++;
        } else {
            lastPoint[1] = Math.max(lastPoint[1], point[1]);
            minArrows--;
        }
    });
    return minArrows;
};

const result1 = findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]);
const result2 = findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]);
const result3 = findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]]);

console.log(result1);
console.log(result2);
console.log(result3);
