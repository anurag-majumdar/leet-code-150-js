/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {
    const mergedIntervals = [];
    for (let i = 0; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        // No overlapping before new intervals
        if (newInterval[0] > currentInterval[1]) {
            mergedIntervals.push(currentInterval)
        } else if (newInterval[1] < currentInterval[0]) {
            mergedIntervals.push(newInterval);
            return mergedIntervals.concat(intervals.slice(i));
        } else {
            newInterval = [Math.min(newInterval[0], currentInterval[0]), Math.max(newInterval[1], currentInterval[1])];
        }
    }
    mergedIntervals.push(newInterval);
    return mergedIntervals;
};
