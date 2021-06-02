import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
  {id: 1, name: 'Notebook', description: 'Modern book for note taking.', price: '$10', image: 'https://images.unsplash.com/photo-1598620616655-7fce1a6fdf87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'},
  {id: 2, name: 'Bag', description: 'Modern bag for all your carrying needs.', price: '$80', image: 'https://images.unsplash.com/photo-1546938576-6e6a64f317cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'},
]

const Products = (props) => {
  return (
    <main>
      <Grid container justify='center' spacing={4}>
        {
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product}/>
            </Grid>
          ))
        }
      </Grid>
    </main>
  );
}

export default Products;
