import React, {FC} from 'react';


export interface IProductProps{
    id?:number,
    title?:string,
    description?:string,
    price?:number,
    discountPercentage?:number,
    rating?:number,
    stock?:number,
    brand?:string,
    category?:string,
    thumbnail?:string,
    images:string[]

}

type IProductTypeProps = IProductProps & {children?: React.ReactNode};
const Product: FC<IProductTypeProps> = ({title, description,price,discountPercentage,images}) => {
    return(
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <div>
                {images.map((image, id) => (
                    <img key={id} src={image} alt={title} style={{width: '200px'}}/>
                ))}
            </div>

        </div>
    )
}


export default Product;