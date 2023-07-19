
import React,{useState} from 'react';
import Card from './Card';

export default function Testimonial({reviews}) {

    const [index, setIndex] = useState(0);

    const leftShiftHandeler = ()=> {
        
        (index-1 >= 0) ? setIndex((prev) => prev-1) : setIndex((reviews.length)-1)
        
    }

    const rightShiftHandeler = ()=> {

        (index+1 >= reviews.length) ? setIndex(0) : setIndex(prev => prev+1);

    }

    const surpriseHandeler = ()=>{
        setIndex(Math.floor(Math.random()*5));
    }

    return (
    <div className='Testimonial'>
        <h2>Our Testimonials</h2>

        <Card reviews = {reviews[index]}
        leftShiftHandeler = {leftShiftHandeler}
        rightShiftHandeler = {rightShiftHandeler}
        surpriseHandeler = {surpriseHandeler} />

    </div>
    )
}




