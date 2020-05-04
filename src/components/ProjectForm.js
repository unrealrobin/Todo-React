import React from 'react';
import TodoItem from './TodoItem';

class ProjectForm extends React.Component {
  state = {
    project: {
      title: '',
    },
  };

  handleChange = (event) => {
    const { title } = this.state.project;
    this.setState({ project: { title: event.target.value } });
  };

  handleSubmit = (e) => {
    const { submitTitle } = this.props;
    e.preventDefault();
    submitTitle(this.state.project);
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label>List Group Title : </label>
          <br />
          <input type="text" value={this.state.project.title} onChange={this.handleChange}></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ProjectForm;
