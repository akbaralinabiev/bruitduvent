import React from 'react'
import './explore.css'
import {item1, item2, item3, item4, item5, item6, item7} from './import.js'

const Explore = () => {
    
    return (
    <div className='explore-wrapper' id='explore'>
        <div className='products'>
           <div className='product-item'>
                <img src={item1} alt="" />
                <h5>Elegance Unveiled</h5>
           </div>
           <div className='product-item'>
                <img src={item2} alt="" />
                <h5>Chic Reverie</h5>
           </div>
           <div className='product-item'>
                <img src={item3} alt="" />
                <h5>Urban Vogue</h5>
           </div>
           <div className='product-item'>
                <img src={item4} alt="" />
                <h5>Sartorial Whispers</h5>
           </div>
           <div className='product-item'>
                <img src={item5} alt="" />
                <h5>Glamour Fusion</h5>
           </div>
           <div className='product-item'>
                <img src={item6} alt="" />
                <h5>Opulent Aura</h5>
           </div>
           <div className='product-item'>
                <img src={item7} alt="" />
                <h5>Chic Reverie</h5>
           </div>
            
        </div>
    </div>
  )
}

export default Explore