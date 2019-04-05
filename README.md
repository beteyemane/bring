# Project : Front End using React

## Technologies used

* HTML5
* CSS
* JavaScript (ES6)
* React
* Axios


## Code Installation

1. Clone or download the repo
2. Install ```yarn``` in Terminal
3. Launch ```npm start``` in Terminal & Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
4. Launch the test runner ```npm test``` in Terminal
## Available Scripts

## Process

The first step was to request the data from the API endpoint given, which was done using Axios. I then mapped over the data to display the list of products. After the basic webpage was completed, I began to implement the Hide/Show sold items feature which was created using two functions. The 'notSold' functions retrieves data where the 'sold' field value is 'false'. This then pushes it into and empty array and adds the items to the 'notSold' state. Once clicked on the Hide/Show button, a 'toggleSold' function is fired which toggles the displayed items between the complete product list and the products that have not been sold.

```notSold() {
  let notSoldProducts = []
  this.state.products.forEach(product => {
      if(product.sold === false) {
        notSoldProducts.push(product)
      }
    })
  this.setState({notSold: notSoldProducts})
}
```
