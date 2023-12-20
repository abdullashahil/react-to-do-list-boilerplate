import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inp: '',
      inputs: [],
    };
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput = (e) => {
    this.setState(() => {
      return {
        inp: e.target.value,
      };
    });
  };

  create = () => {
    if(this.state.inp==""){
      return
    }

    let oldVal = this.state.inp;
    let oldInputs = this.state.inputs.slice();
    oldInputs.push(oldVal);
    this.setState(() => {
      return {
        inp: '',
        inputs: oldInputs,
      };
    });
  };

  deleteItem = (index) => {
    let oldInputs = this.state.inputs.slice();
    oldInputs.splice(index, 1);
    this.setState({
      inputs: oldInputs,
    });
  };

  update=(e,ind)=>{
    let oldinputsarray = [...this.state.inputs]
    oldinputsarray[ind]=e.target.value
    this.setState(()=>{
      return{
        inp: "",
        inputs:oldinputsarray
      }
    })
  }

  render() {
    return (
      <div className='body'><h2>To-do List</h2>
      <div className='main'>
        
        <div className='box'>
          <input
            type='text'
            placeholder='Type here'
            value={this.state.inp}
            onChange={this.changeInput}
          />
          <button onClick={this.create}>Add item</button>
          <br />
          <br />
          <div>{this.state.inp}</div>
          {this.state.inputs.map((item, index) => (
            <div key={index}>
              <input type='text' value={item}   onChange={(e) => this.update(e, index)}
/>
              <button
                className='delbtn'
                onClick={() => this.deleteItem(index)}
              >
                Delete Item
              </button>
              <br />
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
}
