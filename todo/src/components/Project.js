import React from 'react';
import TodoItem from './TodoItem';
import ListItemForm from './ListItemForm';

class Project extends React.Component {
  state = {
    showForm: false,
    listItems: []
  };

  displayForm = () => {
    this.setState({ showForm: true });
  };

  undisplayForm = () => {
    this.setState({ showForm: false });
  };

  getTaskInfo = task => {
    this.setState({ listItems: [...this.state.listItems, task] }, () => {
      console.log(this.state.listItems);
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>{this.props.title}</h1>
        </div>
        <div>
          {this.state.listItems.length > 0 &&
            this.state.listItems.map(items => {
              return <TodoItem name={items.title} date={items.date} />;
            })}
        </div>
        <div>
          <button onClick={this.displayForm}>Create Todo Item</button>
          {this.state.showForm && (
            <ListItemForm undisplayForm={this.undisplayForm} getTask={this.getTaskInfo} />
          )}
        </div>
      </div>
    );
  }
}

export default Project;
