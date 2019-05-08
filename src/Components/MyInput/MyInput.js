import React, { Component } from 'react'

export default class MyInput extends Component {
  state={
    value: '', 
  }

  myTrim(x){
    return x.replace(/[^a-zA-Z0-9!@#$%^&*()-=+]/,'');
  }
  
  changeValue = (value)=>{
    value = this.myTrim(value);
    this.setState({value},()=>console.log(this.state.value));
    this.props.getValue(value);
  }
  render() {
    if(this.props.inputType === 'textArea'){
      return(
        <textarea 
          className={this.props.className}
          onChange={(e)=>this.changeValue(e.target.value)} 
          value={this.state.value} 
          placeholder={this.props.placeholder}
          name={this.props.name} 
          id="" 
          rows="20" 
          required
        />
      )
    }else{
      return(
        <input 
          className={this.props.className} 
          type={this.props.type} 
          placeholder={this.props.placeholder}
          name={this.props.name} 
          onChange={(e)=>this.changeValue(e.target.value)} 
          value={this.state.value}
          required
        />
          
      )
    }
  }
}
