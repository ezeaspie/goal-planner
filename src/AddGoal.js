import React, { Component } from 'react';

class AddGoal extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }
   
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.nameInput.value);
        this.nameInput.value = "";
    }
    render() {
       
        return (
            <form onSubmit = {this.onSubmit}>
                <h3>Add Goal</h3>
                <input type="text" placeholder="New Goal..." ref= {nameInput => this.nameInput = nameInput}/>
                <button>Add Goal</button>
            </form>
        );
    }
}

export default AddGoal;
