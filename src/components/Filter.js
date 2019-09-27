import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="row mt-4">
                <div className="col-md-4">
                    {this.props.count} Products disponibles.
                </div>
                <div className="col-md-4">
                    <label>
                        Ordenar por
                        <select className="form-control" value={this.props.sort}
                        onChange={this.props.handleChangeSort}
                        >
                            <option value="">Seleccionar</option>
                            <option value="lowest">De menor a mayor</option>
                            <option value="higest">De mayor a menor</option>

                        </select>
                    </label>
                </div>

                <div className="col-md-4">
                <label>
                        Filtrar por Talla
                        <select className="form-control" value={this.props.size} 
                        onChange={this.props.handleChangeSize}
                        >
                            <option value="">Todos</option>
                            <option value="x">X</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}
