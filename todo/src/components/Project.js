import React from 'react';
import TodoItem from './TodoItem';
import ListItemForm from './ListItemForm';

class Project extends React.Component {
	state = {
		showForm: false
	};

	displayForm = () => {
		this.setState({ showForm: true });
	};

	undisplayForm = () => {
		this.setState({ showForm: false });
	};

	render() {
		const { title } = this.props;

		return (
			<div>
				<div>
					<h1>{title}</h1>
				</div>
				<div>
					<button onClick={this.displayForm}>Create Todo Item</button>
					{this.state.showForm && <ListItemForm undisplayForm={this.undisplayForm} />}
				</div>
			</div>
		);
	}
}

export default Project;
