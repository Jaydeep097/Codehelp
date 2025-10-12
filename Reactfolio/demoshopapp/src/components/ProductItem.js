
import './ProductItem.css';
import Card from './Card';
import ProductDate from './ProductDate';

const ProductItem = (props) =>{
    return(
        <Card className='product-item'>
            <ProductDate date={props.date} />
            <div className='product-item__description'>
               <h2>{props.title}</h2>
            </div>
        </Card>
    );
}

export default ProductItem;