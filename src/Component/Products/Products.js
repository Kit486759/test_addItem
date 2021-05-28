
import React from 'react'
import './Products.css'


export default function Product(props) {


    return (

        props.data.map((product) => {
            return (<div className="productBox" key={product.id}>
                <h4>{product.title} Price: {product.price}</h4>
                <br />
                <img src={product.image} alt="" />
            </div>)


        })



    );

}
