import React from 'react';
import ReactDOM from 'react-dom';
import ProjectForm from './components/ProjectForm';
import Project from './components/Project';
import './App.scss';

class App extends React.Component {
  state = {
    projects: [],
    showProject: false,
  };

  getProject = (project) => {
    this.setState({ projects: [...this.state.projects, project], showProject: true }, () => {
      console.log(this.state.projects);
    });
  };

  render() {
    return (
      <div className="main">
        <h1>Robin's To-Do List</h1>
        <ProjectForm getProject={this.getProject} />
        {this.state.showProject &&
          this.state.projects.map((project, idx) => {
            return <Project title={project.title} key={`project` + idx} />;
          })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
