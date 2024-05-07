import React, {FC, useEffect, useState} from 'react';
import Product, {IProductProps} from "../product/Product";


const Products: FC = () => {
    const [products, setProducts] = useState<IProductProps[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) =>{
                console.log(products);
                setProducts(products);
            });
    },[]);

    return(
        <div>
            {
                products.map((value:IProductProps) => (
                    <Product key={value.id} title={value.title} description={value.description} price={value.price} images={value.images} />))
            }
        </div>
    )
}

export default Products;