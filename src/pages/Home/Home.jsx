import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExoloreMenu/ExploreMenu'
import FoodDisplay from '../../components/fooddisplay/FoodDisplay'

const Home = () => {
  const[category,setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory = {setCategory}/>
        <FoodDisplay category={category}/>
      
    </div>
  )
}

export default Home
