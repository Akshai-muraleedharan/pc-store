import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import productSingle from '../assets/dbjson/productSingle'
import Single from './Single'

function SingleProduct() {
  const [products] =useState(productSingle)
  const { itemId } = useParams()
    
   
  return (
   <>
    {products.filter((prod)=>{
      return prod.id === itemId
    }).map((item)=>(
      <Single item={item} />
    ))}
   </>
  )
}

export default SingleProduct