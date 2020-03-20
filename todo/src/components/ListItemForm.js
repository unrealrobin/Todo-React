import React from 'react';

class ListItemForm extends React.Component {
  state = {
    listItem: {
      title: '',
      date: ''
    }
  };

  handleSubmit = () => {
    this.props.undisplayForm();
  };

  handleTitle = e => {
    // this.setState({listItem.title: event.target.value})
  };

  render() {
    return (
      <div>
        <form>
          <label>Title</label>
          <br />
          <input type="text" value={this.state.listItem.title} onChange={this.handleTitle}></input>
          <label>Complete By:</label>
          <br />
          <input type="date" value={this.state.listItem.date}></input>
          <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
        </form>
      </div>
    );
  }
}

export default ListItemForm;
