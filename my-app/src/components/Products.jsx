import React from 'react'
import data from "../data.js"
const Products = () => {
  return (
    <>

      <h4>Products</h4>
      <ul>{data.map((item)=>{
         return <li key={item.id}>{item.name} and {item.price}</li>
      })}</ul>
    </>
  )
}

export default Products
