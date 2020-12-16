import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React, { Component } from 'react';

class App extends Component{
  state = { 
    listOfno: "",
 };
  APIcall(){
    fetch("http://localhost:9000/maxNo/" + this.state.listOfno)
    .then(res => res.text())
    .then(res => this.setState({apiResponse:res}))
  }
  
  mySubmitHandler = (event) => {
    event.preventDefault();
    this.APIcall();
  }

  myChangeHandler = (event) => {
    this.setState({listOfno: event.target.value});
  }
  
render(){
  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={this.mySubmitHandler}>
        <h1>Find max No</h1>
        <p>Enter list of numbers seperated by comma</p>
        <input type='text' onChange={this.myChangeHandler} />
        <input
        type='submit'
      />
      </form>
       
       <h5>{this.state.apiResponse}</h5>
      </header>
    </div>
  );
}
  
}

export default App;
