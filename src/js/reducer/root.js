
const HOUR = 1000 * 60 * 60

const mockState = {
  schedules: {
    SUN: [],
    MON: [
      {
        start: 1 * HOUR,
        end: 3 * HOUR,
        title: 'Foo',
        desc: 'bar',
      },
    ],
    TUE: [],
    WED: [
      {
        start: 7 * HOUR,
        end: 9 * HOUR,
        title: 'Busy',
        desc: 'Very',
      },
      {
        start: 11 * HOUR,
        end: 13 * HOUR,
        title: 'GF',
        desc: 'Just dream',
      },
    ],
    THU: [],
    FRI: [],
    SAT: [
      {
        start: 11 * HOUR,
        end: 16 * HOUR,
        title: 'Baz',
        desc: 'quux',
      },
    ],
  },
}

export default (state = mockState, event) => state
