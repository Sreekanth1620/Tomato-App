import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { storeContext } from '../../context/StoreContext'
import FoodItem from '../Fooditem/FOodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(storeContext)
    const filteredFoodList = category === "All"
    ? food_list
    : food_list.filter(item => item.category === category);
  return (
    <div className='food-display' id="food-display">
        <h2>Top Dishes Near  You</h2>
        <div className="food-display-list">
           
          {filteredFoodList.length > 0 ? (
          filteredFoodList.map(item => (
            <FoodItem
              key={item._id} 
              item={item}
            />
          ))
        ) : (
          <p>No items found in this category</p>
        )}
        </div>
        
      
    </div>
  )
}

export default FoodDisplay
