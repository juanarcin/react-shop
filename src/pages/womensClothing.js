import { connect } from 'react-redux';
import Product from '../components/product.js';

function WomensClothing(props) {
  return(
    <ul id="products-list">
      {props.products.clothing.map( product => {
        if(product.category === 'women\'s clothing') {
          return (
            <Product product={product} key={product.id} />
          ) 
        } else {
          return null
        }
      })}
    </ul>
  )    
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(WomensClothing);
