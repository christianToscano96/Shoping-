import React, { Component } from 'react';
//components
import Products  from './components/Products';
import Filter from './components/Filter';
import BasketProducts from './components/BasketProducts';
import Header from './components/Header'
import Product2  from './components/Product2';
import Banner from './components/Banner'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      products: [],
      filterdProducts: [],
      cartItems: [],
      size: ''
     };
     this.handleChangeSort = this.handleChangeSort.bind(this);
     this.handleChangeSize = this.handleChangeSize.bind(this);
     this.handleAddCart = this.handleAddCart.bind(this);
     this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

   //consumir la api
   componentDidMount() {
     fetch("http://localhost:8000/products").then(res => res.json())
      .then(data => this.setState({
        products: data,
        filterdProducts: data
      }));
      if(localStorage.getItem('cartItems')){
        this.setState({cartItems: JSON.parce(localStorage.getItem('cartItems')) });
      }
   }

   //handleChangeSort
   handleChangeSort(e){
    this.setState({sort: e.target.value});
    this.listProducts();
   }
   //SIZE
   handleChangeSize(e){
    this.setState({size: e.target.value});
    this.listProducts();
   }

   listProducts(){
     this.setState(state => {
       if(state.sort !== ''){
         state.products.sort((a,b)=> (state.sort === 'lowest') ? (a.price > b.price?1:-1)
         : (a.price < b.price?1:-1));
       }else{
         state.products.sort((a,b)=> (a.id < b.id?1:-1));
       }

       //size
       if(state.size !== ''){
        return {filteredProducts: state.products.filter(a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0)};
      }
       return {filterdProducts: state.products};
     })
   }

   //agregar a la cesta
   handleAddCart(e, product){
      this.setState(state => {
        const cartItems = state.cartItems;
        let productAlreadyInCart = false;
        cartItems.forEach(item => {
          if(item.id === product.id){
            productAlreadyInCart= true;
            item.count++;
          }
        });
        if(!productAlreadyInCart){
          cartItems.push({...product, count:1});
        }
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
        return cartItems;
      })
   }

   //eliminar cesta
   handleRemoveFromCart(e, item){
      this.setState(state => {
        const cartItems = state.cartItems.filter(element => element.id !== item.id);
        localStorage.setItem('cartItems', cartItems)
        return {cartItems}
      })
   }                                     

   

  render() { 
    return ( 
      <div className="container">
          <Header />
        <hr/>

        <div className="row">
          <div className="col-md-8">
            <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize}
            handleChangeSort={this.handleChangeSort} count={this.state.filterdProducts.length}/>
            <hr/>
            <Products products={this.state.filterdProducts} handleAddCart={this.handleAddCart} />
          </div>

          <div className="col-md-4">
            <BasketProducts cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Banner />
          </div>
          <div className="col-md-12">
            <Product2 products={this.state.filterdProducts} handleAddCart={this.handleAddCart} />
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;


