import React from 'react';
import moment from 'moment';

let duration;
const TodoItem = (props) => {
  const handleSetUrgency = (needDuration) => {
    let dueDate = moment(props.date);
    let todaysDate = moment();
    duration = Math.ceil(dueDate.diff(todaysDate, 'days', true));
    let urgency;
    if (duration >= 7) {
      urgency = 'low-urgency';
    } else if (duration < 7 && duration >= 3) {
      urgency = 'med-urgency';
    } else if (duration < 3) {
      urgency = 'high-urgency';
    }
    if (needDuration) {
      return duration;
    } else {
      return urgency;
    }
  };
  setInterval(handleSetUrgency(), 1000 * 60 * 60 * 12);

  const removeTaskStyle = (e) => {
    e.target.classList.add('removeClassStyle');
    e.target.textContent = 'complete';
  };

  const implementTaskStyle = (e) => {
    e.target.classList.remove('removeClassStyle');
    e.target.textContent = handleSetUrgency(true);
  };

  return (
    <div className="todos">
      <div className="todo-info">
        <h2>{props.name}</h2>
        <h3>Due: {moment(props.date).format('MMM Do YYYY')}</h3>
      </div>
      <div
        className={`${handleSetUrgency()} urgencycut`}
        onMouseEnter={removeTaskStyle}
        onMouseOut={implementTaskStyle}
        onClick={function () {
          props.remove(props.name);
        }}
      >
        <h3>{duration}</h3>
      </div>
    </div>
  );
};

export default TodoItem;
