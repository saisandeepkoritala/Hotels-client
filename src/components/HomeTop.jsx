import React from 'react'
import Input from './Input'
import Hero from "../Images/hero.png"

const HomeTop = () => {
    return (
    <div className='hometop'>
        <div className='top'>
            <h2 className='orange'>Discover</h2>
            <h2>Most Suitable</h2>
            <h2 className='color'>Property</h2>
            <h3>Find a variety of properties that suit you very easily </h3>
            <h3>Forget all difficulties in finding a residence for you</h3>
            <Input />
            <div className='stats'>
                <div>
                    <h3>9,000 <strong>+</strong></h3>
                    <p>Premium Product</p>
                </div>
                <div>
                    <h3>2,000 <strong>+</strong></h3>
                    <p>Happy Customer</p>
                </div>
                <div>
                    <h3>28 <strong>+</strong></h3>
                    <p>Awards Winning</p>
                </div>
            </div>
        </div>
        <div className='homepic'>
            <img src={Hero} alt=""/>
        </div>
    </div>
    )
}

export default HomeTop