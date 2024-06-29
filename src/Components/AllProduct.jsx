import React from 'react'
import { Link, useParams } from "react-router-dom"
import product from "../assets/dbjson/product"
import "./AllProduct.css"
import { Container } from 'react-bootstrap'



function AllProduct() {



    const { productId } = useParams()


    const productName = product.filter((item) => {
        console.log(item);
        return item.idCategory === productId
    }).map((prod) => {
        return (
            <h1> {prod.strCategory} </h1>
        )
    })


    const products = product.filter((item) => {
        return item.idCategory === productId
    }).map((item) => {
        return item.strid

    }).map(prod => prod.map((item) => {
       
        return (
            <>
   <Link to={`/${item.id}`}>
                <li>
                    <img src={item.strCategoryThumb} />

                    <p> {item.strCategory} </p>

                    <div className='price'>
                        <span>
                            <del>₹{item.mrp} </del>
                        </span>

                        <h5>price:₹{item.price}  </h5>
                    </div>

                    <div className='brand_cart'>
                        <h5>brand:<span>{item.brand}</span> </h5>
                        <button>Add to cart</button>
                    </div>



                </li>
                </Link>
            </>
        )

    }))





    return (
        <>
            <Container>
                <div className='mt-80'>
                    {productName}
                </div>

                <div>
                    <ul className='card_list'>
                        {products}
                    </ul>
                </div>


            </Container>
        </>
    )
}

export default AllProduct