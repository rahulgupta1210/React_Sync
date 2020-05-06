import React, {Component} from 'react';

class Form extends React.Component {
    state ={
        userName:''
    }
    handleInput = (event)=>{
        event.preventDefault();
        console.log(this.state.userName);
    }
    render(){
        return <form onSubmit={this.handleInput}>
            <input type="text" placeholder="input" required
            onChange ={event => this.setState({userName:event.target.value})}
            value={this.state.userName}/>
            <button>Add</button>
        </form>
    }
}

export default Form;

