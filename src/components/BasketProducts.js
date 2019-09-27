import React, { Component } from 'react'
import './basket.css';
import util from '../util';

export default class BasketProducts extends Component {
    render() {

        const {cartItems} = this.props;

        return (
            // eslint-disable-next-line react/style-prop-object
            <div className="card text-center border-top shadow-sm" style={{maxWidth: + "25rem"}}>
               {cartItems.length === 0 ? "Cesta Vacia" 
                : <div className="row no-gutters text-center" > 
                         <p className="text-center pl-4 mt-2">{cartItems.length} productos en la cesta.</p>   
                                                
                        {cartItems.length > 0 && 
                            <div className="basket">
                                <ul className="list-grou">
                                    {cartItems.map(item => 
                                        <li>
                                            <div className="row no-gutters mt-2 ">
                                                <div class="col-md-4">
                                                    <img src={`/products/${item.sku}_2.jpg`} class="card-img" alt={item.title}/>
                                                </div>
                                                <div class="col-md-8 ">
                                                    <div class="card-body ">
                                                        <h5 class="card-title">{item.title}  </h5>
                                                        <ul class="list-group "> 
                                                            <li className=" d-flex justify-content-around align-items-center">                                                           
                                                                <span class="badge badge-primary badge-pill px-2">{item.count}</span>
                                                                <p class="card-text font-weight-bold">$ {item.price.toFixed(2) * item.count}</p>
                                                            </li>
                                                            <button className="btn btn-danger mt-4 py-2 rounded-pill" 
                                                                onClick={(e) => this.props.handleRemoveFromCart(e, item)}>Eliminar</button>                                                
                                                        </ul>
                                                    </div>
                                                </div>                                       
                                            </div>
                                        </li>                       
                                        )}
                                </ul>
                                <span className="total">Total: {util.formatCurrency(cartItems.reduce((a , c) => a + c.price * c.count, 0))}</span>
                            </div>
                        }
                    </div>
                }
            </div>

            
        )
    }
}
