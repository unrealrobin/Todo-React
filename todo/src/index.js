import React from "react";
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return <div> It. Is. Working. </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))