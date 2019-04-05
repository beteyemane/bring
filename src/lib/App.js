import React, { Component } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard.js'

let likes = []

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      notSold: [],
      toggle: false,
      buttonName: 'Hide Sold Items',
      liked: false,
      likes: []
    }
    this.notSold.bind = this.notSold.bind(this)
    this.toggleSold.bind = this.toggleSold.bind(this)
    this.handleChange.bind = this.handleChange.bind(this)
  }

  notSold() {
    let notSoldProducts = []
    this.state.products.forEach(product => {
        if(product.sold === false) {
          notSoldProducts.push(product)
        }
      })
    this.setState({notSold: notSoldProducts})
  }

  toggleSold(){
    if(this.state.toggle === false) {
      this.notSold()
      this.setState({ buttonName: 'Show All Items' })
    } else {
      this.setState({ notSold: []})
      this.setState({ buttonName: 'Hide Sold Items' })
    }
    this.setState({ toggle: !this.state.toggle })
  }

  componentDidMount(){
    axios.get('https://d34eedf5-6610-465f-8dcc-aed19b21dee4.mock.pstmn.io/api/v1/product')
    .then(res => {
      this.setState({ products: res.data })
    })
  }

  handleChange(e, product){
    this.setState({ likes: product })
    console.log(this.state.likes)
    const button = e.target
    if(!button.classList.contains('background_color')){
      button.classList.add('background_color')
      likes.push(product)
    } else {
      button.classList.remove('background_color')
    }
  }

  render() {
    return (
      <div className="App">
        <h1>bring.</h1>
        {this.state.likes.map(like => <div key={like.id}> <h1>{like.title}</h1></div>)}
        <div className="button-container">
          <button onClick={(e) => this.toggleSold()} className="items">{this.state.buttonName}</button>
        </div>
        {!this.state.toggle ?
        <div className="products">
          {this.state.products.map(product => <div className="product-items" key={product.id}>
            <ProductCard {...product}
            />
            <button onClick={(e) => this.handleChange(e, product)}>👍</button>
            </div>)}
        </div>
      :
      <div className="products">
        {this.state.notSold.map(product => <div className="product-items" key={product.id}>
          <ProductCard {...product}
          />
          <button onClick={(e) => this.handleChange(e, product)}>👍</button>
          </div>)}
      </div>
    }
      </div>
    );
  }
}

export default App;
