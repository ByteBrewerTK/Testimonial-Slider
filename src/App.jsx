import React from 'react';
import './App.css';
import Testimonial from './components/Testimonial';
import reviews from "./data";


export default function App() {
  return (
    <div className='App'>
      <Testimonial reviews = {reviews}/>
    </div>
  )
}
