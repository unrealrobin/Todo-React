import React from 'react';

const TodoItem = (props) => {
  return (
    <div className="project-item">
      <h2>{props.name}</h2>
      <h3>{props.date}</h3>
    </div>
  );
};

export default TodoItem;
