/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// NeetCode Solution
const insert = function (intervals, newInterval) {
    const mergedIntervals = [];
    for (let i = 0; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        // Case 1: No overlapping before merging intervals
        if (newInterval[0] > currentInterval[1]) {
            mergedIntervals.push(currentInterval)
        }
        // Case 2: No Overlapping after merging newInterval
        else if (newInterval[1] < currentInterval[0]) {
            mergedIntervals.push(newInterval);
            return mergedIntervals.concat(intervals.slice(i));
        }
        // Case 3: Overlapping and merging intervals
        else {
            newInterval = [Math.min(newInterval[0], currentInterval[0]), Math.max(newInterval[1], currentInterval[1])];
        }
    }
    mergedIntervals.push(newInterval);
    return mergedIntervals;
};

// LeetCode solution (linear search)
// O(n) time | O(n) space
const insertInterval = function (intervals, newInterval) {
    let n = intervals.length,
        i = 0,
        res = [];

    // Case 1: No overlapping before merging intervals
    while (i < n) {
        if (intervals[i][1] < newInterval[0]) {
            res.push(intervals[i]);
            i++;
        }
    }

    // Case 2: Overlapping and merging intervals
    while (i < n) {
        if (newInterval[1] >= intervals[i][0]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
    }
    res.push(newInterval);

    // Case 3: No overlapping after merging newInterval
    while (i < n) {
        res.push(intervals[i]);
        i++;
    }

    return res;
};