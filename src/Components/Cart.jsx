import React, { useCallback, useContext, useEffect, useState } from 'react'
import "./Cart.css"
import { Col, Container, Row } from 'react-bootstrap'
import { CartContext } from '../App'
import { FaTrash } from "react-icons/fa";
import { ImArrowLeft2 } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';


function Cart() {
    const { cart, setCart } = useContext(CartContext)
    const [total, setTotal] = useState(0);
    //     const [index, setIndex] = useState()
    //   console.log(index);
    // const name =cart.strCategory.length > 20 ? cart.strCategory.substring(0,20):cart.strCategory


    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0))
    }, [cart])




    const removeItem = (ids) => {
        const newList = cart.filter(item => item.id !== ids)
        setCart(newList)
    }

    // const checkHandler = useCallback((e) => {
    //         console.log(e);
    //         const check = cart.filter()
    //     }
    // )

    const navigate = useNavigate()



    return (
        <>

            <Container className='mt-80 '>
                <button onClick={() => navigate(-1)} style={{ border: "none", backgroundColor: "#f7f7f7", fontSize: "20px" }} >
                    <ImArrowLeft2 />
                </button>
                <div className='cart_contianer'>
                    <h2 className='cart_title'>Cart Products</h2>
                    {cart.length > 0 ? cart.map((item, index) => {

                        return (
                            <div className='cart_product'>

                                <Popup trigger={<button style={{ border: "none" }}><img className='cart-img' src={item.strCategoryThumb} alt="" />
                                </button>} position="right center">
                                    <div>
                                        <Row>
                                            <Col>
                                                <img className='cart_pop_img' src={item.strCategoryThumb} />
                                            </Col>
                                            <Col className='popup_details'>
                                                <p >{item.strCategory}</p>
                                                <h5>Brand: {item.brand} </h5>
                                            </Col>
                                        </Row>
                                    </div>
                                </Popup>
                                <div className='cart_details'>
                                    <div style={{ marginRight: "5px" }}>
                                        <h4>productname:{item.strCategory.length > 20 ? item.strCategory.substring(0, 18) + ".." : item.strCategory}</h4>
                                        <h5>price:{item.price}</h5>
                                    </div>
                                    <button onClick={() => removeItem(item.id)} className='cart_trash'> <FaTrash /> </button>
                                </div>

                            </div>



                        )
                    }) : <h5 style={{ color: "red", textAlign: "center", padding: "10px 0px" }} className='empty_cart'>Cart is empty</h5>}

                    <h4 className='cart_total'> Total amount:{total}</h4>
                    <div className='cart_checkout'>
                        <button >Check out</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart