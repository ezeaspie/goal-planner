import React, { Component } from 'react';

class ProductItem extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isEdit : false,
        }

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.name);
    }

    onEdit() {
        this.setState( {isEdit : true});
    }

    onEditSubmit (e) {
        e.preventDefault();
        this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);
        this.setState({isEdit : false});
    }
    render() {
        const { name, price } = this.props;

        return (

            <div key={name}>
                {
                    this.state.isEdit
                        ? (
                            <form onSubmit={this.onEditSubmit}>
                                <input type="text" defaultValue = { name } placeholder="Product Name..." ref={nameInput => this.nameInput = nameInput} />
                                <input type="number" defaultValue = { price } placeholder="Price..." ref={priceInput => this.priceInput = priceInput} />
                                <button>Save</button>
                            </form>
                        ) 
                        : (
                            <div>
                            <h2> { name } </h2>
                             <h3> {price} </h3>
                            <button onClick={this.onEdit}> Edit </button>
                            <button onClick={this.onDelete}> Delete </button>
                            </div>
                        )
                }
                
            </div>
        );
    }
}

export default ProductItem;
