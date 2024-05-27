/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// O(nLog(n)) time | O (n) space
const merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals = [intervals[0]];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];
        if (checkOverlap(currentInterval, nextInterval)) {
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            currentInterval = nextInterval;
            mergedIntervals.push(nextInterval);
        }
    }
    return mergedIntervals;
};

const checkOverlap = (interval1, interval2) => {
    if (interval1[1] >= interval2[0]) {
        return true;
    }
    return false;
};

console.log(merge([[1, 3], [15, 18], [2, 6], [8, 10]]));
console.log(merge([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]));
