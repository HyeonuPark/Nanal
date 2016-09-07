
const mockState = {
  schedules: {
    SUN: [],
    MON: [
      {
        start: 1 * 1000 * 60 * 60,
        end: 3 * 1000 * 60 * 60,
        title: 'Foo',
        desc: 'bar',
      },
    ],
    TUE: [],
    WED: [],
    THU: [],
    FRI: [],
    SAT: [
      {
        start: 11 * 1000 * 60 * 60,
        end: 16 * 1000 * 60 * 60,
        title: 'Baz',
        desc: 'quux',
      },
    ],
  },
}

export default (state = mockState, event) => state
