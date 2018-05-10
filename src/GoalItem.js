import React, { Component } from 'react';

class GoalItem extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isEdit : false,
        }

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.onComplete = this.onComplete.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.name);
    }

    onEdit() {
        this.setState( {isEdit : true});
    }

    onEditSubmit (e) {
        e.preventDefault();
        this.props.onEditSubmit(this.nameInput.value, this.props.name);
        this.setState({isEdit : false});
    }

    onComplete(e) {
        this.props.toggleComplete(this.props.name);
    }

    render() {
        const { name } = this.props;

        return (

            <div key={name}>
                {
                    this.state.isEdit
                        ? (
                            <form onSubmit={this.onEditSubmit}>
                                <input type="text" defaultValue = { name } placeholder="Product Name..." ref={nameInput => this.nameInput = nameInput} />
                                <button>Save</button>
                            </form>
                        ) 
                        : (
                            <div>
                            <h2> { name } </h2>
                            <input type="checkbox" checked={this.props.isComplete} onChange={this.onComplete} ref={checkedInput => this.checkedInput = checkedInput} /> <span>Mark as Complete</span>
                            <button onClick={this.onEdit}> Edit </button>
                            <button onClick={this.onDelete}> Delete </button>
                            </div>
                        )
                }
                
            </div>
        );
    }
}

export default GoalItem;
