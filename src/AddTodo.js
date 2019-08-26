import React from 'react';

class AddTodo extends React.Component {
  state = {
    name: '',
    isComplited: false
  }
  handleInputName = (event) => {
    const val = event.target.value;
    this.setState({...this.state, name: val})
  }
  addTodo = () => {
    fetch('http://localhost:3000/todo',{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(this.state)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
  render(){
    return(
      <>
        <input onChange={this.handleInputName} value={this.state.name} type="text"/>
        <button onClick={this.addTodo}>AddTask</button>
      </>
    );
  }
}

export default AddTodo;