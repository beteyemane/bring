# Project : Front End using React.js

## Technologies used

* HTML5
* CSS
* JavaScript (ES6)
* React.js
* Axios

## Timeframe

Approx 4.5 hours

## Code Installation

1. Clone or download the repo
2. Install ```yarn``` in Terminal
3. Launch ```npm start``` in Terminal & Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
4. Launch the test runner ```npm test``` in Terminal

## Application: bring.

![Screenshot 2019-04-07 at 00 41 35](https://user-images.githubusercontent.com/44004811/55682856-cf232500-5930-11e9-9c8b-13c6e191a28e.png)

An application where users can view products and be able to like items as well as having the option to refine products on whether they've been sold or not.

## Process

Using Axios, I requested the data from the API endpoint given and mapped over the data to display the list of products. After the basic webpage was completed and some styling was added, I began to implement a hide/show feature which allows the user to hide the sold items from the product list and this was executed using two functions. The 'notSold' function retrieves data where the 'sold' field value is 'false'. This then pushes the products that have not been sold into and empty array and adds the items to the 'notSold' state. Once clicked on the Hide/Show button, a 'toggleSold' function is fired which toggles the displayed items between the complete product list and the products that have not been sold.

```
notSold() {
  let notSoldProducts = []
  this.state.products.forEach(product => {
      if(product.sold === false) {
        notSoldProducts.push(product)
      }
    })
  this.setState({notSold: notSoldProducts})
}
```
I then worked on the like feature. This was achieved by firstly checking if the like button contains a class of 'background_color: red' hence, has been clicked on before. If so, the title of the product is pushed into an array. In order to 'unlike', the product title is removed using 'slice' on click. This finds the index position of "the product title" which then removes one element from that position.

```
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
```
The users can view the items liked by clicking on the 'Liked Items' button. The application was also made mobile responsive using media query.

If I had more time I would refactor my code to ensure maximum readability was attained. I'd also would like to expand on testing.
