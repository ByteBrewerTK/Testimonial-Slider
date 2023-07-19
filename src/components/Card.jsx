import React from 'react';
import {FaQuoteLeft, FaQuoteRight, FaAngleLeft, FaAngleRight} from "react-icons/fa";


export default function Card({reviews,leftShiftHandeler, rightShiftHandeler, surpriseHandeler}) {
    
    return (
        <div className='Card'>
            <img src={reviews.image} alt="" />

            <div className='title'>
                <p className='name'>{reviews.name}</p>
                <p className='job-title'>{reviews.job}</p>
            </div>

            <div className='left-quote quote'>
                <FaQuoteLeft/>
            </div>

            <div>
                {reviews.text}
            </div>

            <div className='right-quote quote'>
                <FaQuoteRight/>
            </div>

            <div className='btn-change'>
                <button
                className='btn-prev'
                onClick= {leftShiftHandeler}>
                <FaAngleLeft/>
                </button>

                <button
                className="btn-next" 
                onClick={rightShiftHandeler}>
                <FaAngleRight/>
                </button>
            </div>

            <button className="btn-surprise" onClick={surpriseHandeler}>Surprise Me</button>
    
        </div>

    )
}
