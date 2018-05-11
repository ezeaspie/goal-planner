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
            <form className="add-goal" onSubmit = {this.onSubmit}>
                <h3>Add a Goal</h3>
                <div className="input-line">
                <input type="text" placeholder="New Goal..." ref= {nameInput => this.nameInput = nameInput}/>
                <button></button>
                </div>
            </form>
        );
    }
}

export default AddGoal;
