import React, { Component } from 'react';
import './products.css';
import util from '../util';

class Products extends Component {
    render() { 

        const productItem = this.props.products.map(product => (
            <div className="col-md-4 mt-5" key={product.id} >
                <div className="box-product shadow p-2 mb-5 bg-white rounded text-center">
                    <a href={`#${product.id}`} >   
                         <img className="img-box mb-2 border-top shadow-sm p-2 bg-white rounded-top"src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                        <p>
                            {product.title}
                        </p>
                    </a>

                    <div>
                        <p className="font-weight-bold">{util.formatCurrency(product.price)}</p>
                        <button className="btn btn-primary mb-2 rounded-pill"
                            onClick={(e)=>this.props.handleAddCart(e, product)}
                        >Agregar al carrito</button>
                    </div>
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