class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

/**
   * @param intervals: an array of meeting time intervals
   * @return: if a person could attend all meetings
   */
const canAttendMeetings = (intervals = []) => {
    intervals.sort((a, b) => a.start - b.start);
    const n = intervals.length;
    let i = 1;
    while (i < n) {
        const interval1 = intervals[i - 1];
        const interval2 = intervals[i];

        if (checkOverlap(interval1, interval2)) {
            return false;
        }
        i++;
    }
    return true;
};

const checkOverlap = (interval1, interval2) => {
    if (interval1.end > interval2.start) {
        return true;
    }
};

const i1 = new Interval(0, 30);
const i2 = new Interval(5, 10);
const i3 = new Interval(15, 20);
const result1 = canAttendMeetings([i1, i2, i3]);
console.log(result1);

const i4 = new Interval(5, 8);
const i5 = new Interval(9, 15);
const result2 = canAttendMeetings([i4, i5]);
console.log(result2);