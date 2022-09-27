import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-image';

class Products extends Component {
    render() {
        const { product } = this.props;
        return (
            <React.Fragment>
                <div className='pt-3'>
                    <div className='d-flex flex-column h-100 justify-content-start py-1 '>
                        <ProgressiveImage
                            delay={20}
                            src={product.imageUrl}
                            placeholder={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/blue_placeholder'}
                        >
                            {(src, loading) => (
                                <img
                                    style={{ width: '40vw', height: '30vw', borderRadius: '5px' }}
                                    src={src}
                                    alt={product.Ingredient}
                                />
                            )}
                        </ProgressiveImage>
                        <span className='product-name  pt-1'>{product.Ingredient}</span>
                        <span className='product-short-text '>{product.Short_text}</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Products;