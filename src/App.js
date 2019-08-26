import React from 'react';
import './App.css';
import AddTodo from './AddTodo';

class App extends React.Component {
  state = {
    todo: []
  }
  componentDidMount() {
    fetch('http://localhost:3000/todo')
      .then(response => response.json())
      .then(result => this.setState({...this.state, todo: result}))
      .catch(err => {throw err})
  }
  render() {
    return (
      <div className="App">
        <AddTodo />
        {this.state.todo.map(item => <h1 key={item.id}>{item.name}</h1>)}
      </div>
    );
  }
}

export default App;
