class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

/**
 * @param intervals: an array of meeting time intervals
 * @return: the minimum number of conference rooms required
 */
const minMeetingRooms = (intervals) => {
  const start = intervals.map(({ start, end }) => start).sort((a, b) => a - b);
  const end = intervals.map(({ start, end }) => end).sort((a, b) => a - b);

  let meetingRooms = 0,
    count = 0,
    s = 0,
    e = 0;

  while (s < intervals.length) {
    if (start[s] < end[e]) {
      s += 1;
      count += 1;
    } else {
      e += 1;
      count -= 1;
    }
    meetingRooms = Math.max(meetingRooms, count);
  }
  return meetingRooms;
};

const i1 = new Interval(0, 30);
const i2 = new Interval(5, 10);
const i3 = new Interval(15, 20);
const result1 = minMeetingRooms([i1, i2, i3]);
console.log(result1);

const i4 = new Interval(5, 8);
const i5 = new Interval(9, 15);
const result2 = minMeetingRooms([i4, i5]);
console.log(result2);
