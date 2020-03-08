import React from 'react';

class ProductList extends React.Component
{
  render()
  {
    if(this.props.products === null || this.props.products.length === 0)         {
      return <h4 className="p-2">No Products</h4>
    }

    return this.props.products.map(p =>
      <div className="card m-1 p-1 bg-light" key={p.id}>
        <h4>{p.name}</h4>
        <span className="badge badge-pill badge-primary float-right">
          ${p.price.toFixed(2)}
        </span>
        <div className="card-text bg-white p-1">
          {p.description}
          </div>
      </div>
    );
  }
}

export default ProductList;
