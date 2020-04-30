import React from 'react';
import ReactDOM from 'react-dom';
import ProjectForm from './components/ProjectForm';
import Project from './components/Project';
import StorageService from './utils/StorageService';
import './App.scss';

class App extends React.Component {
  state = {
    projects: [],
    showProject: false,
  };

  componentDidMount = () => {
    const projects = JSON.parse(StorageService.getProjects());
    this.setState({ projects: projects || [], showProject: true });
  };

  getProject = (project) => {
    const { projects } = this.state;
    StorageService.setProject(project.title);
    this.setState({ projects: [...projects, project], showProject: true });
  };

  render() {
    //destructure state at top of render/any methods
    const { showProject, projects } = this.state;
    return (
      <div className="main">
        <h1>Robin's To-Do List</h1>
        <ProjectForm submitTitle={this.getProject} />
        {showProject &&
          projects &&
          projects.map((project, idx) => {
            return <Project title={project.title} key={`project` + idx} />;
          })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
