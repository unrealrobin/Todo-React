import React from 'react';
import TodoItem from './TodoItem';
import ListItemForm from './ListItemForm';
import StorageService from '../utils/StorageService';

class Project extends React.Component {
  state = {
    showForm: false,
    listItems: [],
  };

  componentDidMount = () => {
    const items = JSON.parse(StorageService.getItems(this.props.title));
    if (items) {
      this.setState({ listItems: [...items, ...this.state.listItems] });
    }
  };

  displayForm = () => {
    this.setState({ showForm: true });
  };

  undisplayForm = () => {
    this.setState({ showForm: false });
  };

  getTaskInfo = (newtask) => {
    this.setState({ listItems: [newtask, ...this.state.listItems] });
  };

  render() {
    return (
      <div className={`${this.props.title} project-group`}>
        <div>
          <h1 className="projectTitle">{this.props.title}</h1>
        </div>
        <div>
          {this.state.listItems &&
            this.state.listItems.map((items, idx) => {
              return <TodoItem name={items.title} date={items.date} key={`item` + idx} />;
            })}
        </div>
        <div>
          <button onClick={this.displayForm}>Create Todo Item</button>
          {this.state.showForm && (
            <ListItemForm
              undisplayForm={this.undisplayForm}
              getTask={this.getTaskInfo}
              projectTitle={this.props.title}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Project;
