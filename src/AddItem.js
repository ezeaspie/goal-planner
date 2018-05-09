import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }
   
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.nameInput.value, this.priceInput.value);

        this.priceInput.value = "";
        this.nameInput.value = "";
        
    }
    render() {
       
        return (
            <form onSubmit = {this.onSubmit}>
                <h3>Add Product</h3>
                <input type="text" placeholder="Product Name..." ref= {nameInput => this.nameInput = nameInput}/>
                <input type="number" placeholder="Price..."  ref = {priceInput => this.priceInput = priceInput}/>
                <button>Add Item</button>
            </form>
        );
    }
}

export default AddItem;
