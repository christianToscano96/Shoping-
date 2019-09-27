import React, { Component } from 'react';
import './card.css';


class Products extends Component {
    render() { 

        const productItem = this.props.products.map(product => (          
                <div className="col-md-4 mt-5 mb-2 product" key={product.id} >
                    <div className="imgBox">
                        <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                    </div>
                    <div className="details">
                        <h2>{product.title} <br/><span>{ product.description}</span></h2>
                        <div className="price">{'$' + product.price} </div>

                        <label >Tamaño: </label>
                        <ul>
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>XL</li>
                            <li>XXL</li>
                        </ul>
                        <label >Color: </label>
                        <ul className="colors">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <a href={`#${product.id}`}
                        onClick={(e)=>this.props.handleAddCart(e, product)}
                        >Agregar al Carrito</a>
                    </div>   
                </div>
        ))

        return ( 
            <div className="row ">
               {productItem}
            </div>
         );
    }
}
 
export default Products;