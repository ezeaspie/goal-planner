import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './myComponent';
import ProductItem from './product-item';
import AddItem from './AddItem';

const products = [
  {
    name: "Morning Moon Face Wash",
    price: 80,
  },
  {
    name: "Plateau Chic Coffee Container",
    price: 10,
  },
  {
    name: "NSPD Playset",
    price: 30,
  },
];

localStorage.setItem('products' , JSON.stringify(products) );

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products')),
    }
  }

  componentWillMount() {
    const products = this.getProducts();

    this.setState({ products });

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);

  }

  getProducts = () => {
    return this.state.products;
  }

  onDelete = (name) => {
    console.log(name);
    const products = this.getProducts();

    const filterProducts = products.filter(product => {
      return product.name !== name;
    });

    console.log(filterProducts);

    this.setState({ products : filterProducts })
  }

  onAdd = (name,price) => {
    console.log(name,price);
    const products = this.getProducts();

    products.push({ name, price });

    this.setState({ products });
  }

  onEditSubmit = (name,price, originalName) => {
    console.log(name,price);
    let products = this.getProducts();

    products.map(product => {
      if(product.name === originalName) {
        product.name = name;
        product.price = price;
      }
      return product;
    });

    this.setState({ products });
  }

  render() {
    
    return (
      <div className="App">
        <h1>Product Manager</h1>
        <AddItem 
          onAdd = {this.onAdd}
          />
        {
          this.state.products.map(item => {
            return (
              <ProductItem key={item.name} {...item} onDelete = {this.onDelete} onEditSubmit = {this.onEditSubmit}/>
            );
          })
        }
      </div>
    );
  }
}

export default App;
