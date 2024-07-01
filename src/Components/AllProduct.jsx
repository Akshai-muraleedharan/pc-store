import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import product from "../assets/dbjson/product"
import "./AllProduct.css"
import { Container } from 'react-bootstrap'
import { CartContext } from '../App'
import { ImArrowLeft2 } from "react-icons/im";



function AllProduct() {







    const [visible, setVisible] = useState(6)



    const { productId } = useParams()

    const handleClick = () => {
        setVisible((prevValve) => prevValve + 3)
    }

    const productName = product.filter((item) => {

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

    }).map(prod => prod.slice(0, visible).map((item) => {



        return (
            <>
                <Link to={`/${item.id}`} key={item.idCategory}>
                    <li key={item.id}>

                        <img src={item.strCategoryThumb} />

                        <p> {item.strCategory} </p>

                        <div className='price'>
                            <span>
                                <del>₹{item.mrp} </del>
                            </span>

                            <h5>price:₹{item.price}  </h5>
                        </div>

                        <div className='brand_cart'>
                            <h5>brand: <span>{item.brand}</span> </h5>

                        </div>



                    </li>
                </Link>
            </>
        )

    }))



    const navigate = useNavigate()


    return (
        <>
            <Container>

                <div className='mt-80' >
                    <button onClick={() => navigate(-1)} style={{ border: "none", backgroundColor: "#fff", fontSize: "20px", marginBottom: "20px" }}>
                        <ImArrowLeft2 />
                    </button>
                    {productName}
                </div>

                <div>
                    <ul className='card_list'>
                        {products}
                    </ul>
                </div>

                <div className='add_more_btn'>

                    {products[0].length >= 6 ? <button className='add_more_button' onClick={(handleClick)}>load more</button> : null}

                    {/* <button  className='add_more_button' onClick={(handleClick)}>load more</button>  */}

                </div>


            </Container>
        </>
    )
}

export default AllProduct