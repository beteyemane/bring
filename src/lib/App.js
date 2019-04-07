import React, { Component } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard.js'

let likesArr = []

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      notSold: [],
      toggle: false,
      buttonName: 'Hide Sold Items',
      likes: [],
      likesHidden: false
    }
    this.notSold.bind = this.notSold.bind(this)
    this.toggleSold.bind = this.toggleSold.bind(this)
    this.toggleLikes.bind = this.toggleLikes.bind(this)
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
    if(this.state.toggle) {
      this.setState({ buttonName: 'Hide Sold Items' })
    } else {
      this.notSold()
      this.setState({ buttonName: 'Show All Items' })
    }
    this.setState({ toggle: !this.state.toggle })
  }

  componentDidMount(){
    axios.get('https://d34eedf5-6610-465f-8dcc-aed19b21dee4.mock.pstmn.io/api/v1/product')
    .then(res => {
      this.setState({ products: res.data })
    })
  }

  handleChange(e, productItem){
    const button = e.target
    if(!button.classList.contains('background_color')){
      button.classList.add('background_color')
      likesArr.push(productItem)
      this.setState({likes: likesArr})
    } else {
      button.classList.remove('background_color')
      likesArr.splice( likesArr.indexOf(productItem), 1 )
      this.setState({likes: likesArr})
    }
  }

  toggleLikes() {
    this.setState({likesHidden: !this.state.likesHidden})
  }

  render() {
    const { likesHidden } = this.state;
    return (
      <div className="App">
        <h1>bring.</h1>
        <div className="button-container">
          <button onClick={(e) => this.toggleSold()} className="items">{this.state.buttonName}</button>
          <button onClick={() => this.setState({ likesHidden: !likesHidden })}> LIKED ITEMS: {this.state.likes.length} </button>
        </div>

        { likesHidden ? <div className="liked-items-container">
        {this.state.likes.map((like, index) => <div key={index}>{like}</div>)}
        </div> : null}

        {!this.state.toggle ?
        <div className="products">
          {this.state.products.map(product => <div className="product-items" key={product.id}>
            <ProductCard {...product}
            />
            <button classlist="like-button" onClick={(e) => this.handleChange(e, product.title)}>
               ❤
            </button>
            </div>)}
        </div>
      :
        <div className="products">
          {this.state.notSold.map(product => <div className="product-items" key={product.id}>
            <ProductCard {...product}
            />
            <button classlist="like-button" onClick={(e) => this.handleChange(e, product.title)}>
               ❤
            </button>
          </div>)}
        </div>
      }
      </div>
    );
  }
}

export default App;
