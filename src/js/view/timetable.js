import React from 'react'
import {connect} from 'react-redux'

import {
  cElement, cEmpty, cSchedule, cTitle,
  cRow, cRowHead, cToday, cTimeTable,
} from 'src/css/timetable.css'

const pt = React.PropTypes

const msInADay = 1000 * 60 * 60 * 24

const EmptyCell = ({len}) => (
  <div
    className={`${cElement} ${cEmpty}`}
    style={{flexGrow: len}}
  />
)

EmptyCell.propTypes = {
  len: pt.number.isRequired,
}

const ScheduleCell = ({len, title, desc}) => (
  <div
    className={`${cElement} ${cSchedule}`}
    style={{flexGrow: len}}
  >
    <h4 className={cTitle}>{title}</h4>
  </div>
)

ScheduleCell.propTypes = {
  len: pt.number.isRequired,
  title: pt.string.isRequired,
  desc: pt.string,
}

const Row = ({dailySchedules, weekday, isToday}) => {
  const children = dailySchedules
    .reduce(({data, last}, {start, end, title, desc}) => {
      data.push({
        key: `e${start}`,
        isEmpty: true,
        len: start - last,
      })
      data.push({
        key: `s${end}`,
        isEmpty: false,
        len: end - start,
        title,
        desc,
      })

      return {data, last: end}
    }, {data: [], last: 0})

  children.data.push({key: 'el', isEmpty: true, len: msInADay - children.last})

  return (
    <div className={`${cRow} ${isToday ? cToday : ''}`}>
      <div className={`${cRowHead}`}>
        <span>{weekday}</span>
      </div>
      {
        children.data.map(({key, isEmpty, len, title, desc}) => {
          if (isEmpty) {
            return <EmptyCell key={key} len={len} />
          }

          return <ScheduleCell key={key} len={len} title={title} desc={desc} />
        })
      }
    </div>
  )
}

Row.propTypes = {
  dailySchedules: pt.array.isRequired,
  weekday: pt.string.isRequired,
  isToday: pt.bool,
}

const weekdayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const TimeTable = ({weeklySchedules, weekday}) => (
  <div className={`${cTimeTable}`}>
    {
      weekdayNames.map(dayName => (
        <Row
          key={dayName}
          dailySchedules={weeklySchedules[dayName]}
          weekday={dayName}
          isToday={weekday === dayName}
        />
      ))
    }
  </div>
)

TimeTable.propTypes = {
  weeklySchedules: pt.object.isRequired,
  weekday: pt.string.isRequired,
}

const curDay = () => weekdayNames[new Date().getDay()]

export default connect(
  (state) => ({weeklySchedules: state.schedules, weekday: curDay()}),
)(TimeTable)
