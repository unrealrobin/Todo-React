import React from 'react';
import moment from 'moment';

const TodoItem = (props) => {
  const handleSetUrgency = () => {
    let dueDate = moment(props.date);
    let todaysDate = moment();
    let duration = Math.ceil(dueDate.diff(todaysDate, 'days', true));
    let urgency;
    if (duration >= 7) {
      urgency = 'low-urgency';
    } else if (duration < 7 && duration >= 3) {
      urgency = 'med-urgency';
    } else if (duration < 3 && duration >= 1) {
      urgency = 'high-urgency';
    } else {
      urgency = 'overdue';
    }
    return urgency;
  };

  return (
    <div className={`${handleSetUrgency()} todos`}>
      <h2>{props.name}</h2>
      <h3>{props.date}</h3>
    </div>
  );
};

export default TodoItem;
