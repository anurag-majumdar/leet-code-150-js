/**
 * O(nLog(n)) time | O (n) space
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
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

/**
 * O(nLog(n)) time | O (n) space.
 * More concise code.
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const mergeIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [];

  intervals.forEach((interval) => {
    const lastInterval = mergedIntervals[mergedIntervals.length - 1];
    // If non-overlapping interval
    if (mergedIntervals.length === 0 || lastInterval[1] < interval[0]) {
      mergedIntervals.push(interval);
    }
    // If overlapping, keep updating the last retrieved interval
    else {
      lastInterval[1] = Math.max(lastInterval[1], interval[1]);
    }
  });
  return mergedIntervals;
};

console.log(
  merge([
    [1, 3],
    [15, 18],
    [2, 6],
    [8, 10],
  ]),
);
console.log(
  merge([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ]),
);
