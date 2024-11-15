import React, { useContext, useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/frontend_assets/assets'
import { storeContext } from '../../context/StoreContext'

const FoodItem = ({item}) => {
    const {id,image,price,description,name}= item;
    const { cartItems,addToCart,removeFromCart}= useContext(storeContext);
  return (
    <div>
        <div className="food-item">
            <div >
                <div className="food-item-img-container">
                <img  className="food-item-img" src={image} alt="" />
                {
                    !cartItems[id]                    ?<img  className="add"onClick={()=>addToCart(id)} src={assets.add_icon_white}alt="" />
                     : <div className="food-iten-counter">
                        <img onClick={()=>removeFromCart(id)}src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                     </div>
                }
                </div>
            </div>
            <div className="food-item-info">
                <div className="food-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />

                </div>
                <p className='food-dics'>{description}</p>
                <p className="food-price">$:{price}</p>
            </div>
        </div>
      
    </div>
  )
}

export default FoodItem;
