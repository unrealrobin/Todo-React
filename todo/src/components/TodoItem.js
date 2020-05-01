import React from 'react';
import moment from 'moment';

let duration;
const TodoItem = (props) => {
  const handleSetUrgency = () => {
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
    return urgency;
  };

  setInterval(handleSetUrgency(), 1000 * 60 * 60 * 12);

  return (
    <div className="todos">
      <div className="todo-info">
        <h2>{props.name}</h2>
        <h3>{props.date}</h3>
      </div>
      <div className={`${handleSetUrgency()} urgencycut`}>
        <h3>{duration}</h3>
      </div>
    </div>
  );
};

export default TodoItem;
