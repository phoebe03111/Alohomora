import React from 'react';
import './TestimonyGroup.scss';
import { Testimonials } from '../Testimonials/Testimonials';

const TestimonyGroup = () => {
  return (
    <div className='testimonies'>
      <h1 className='testimonies__title'>Testimonials</h1>
      <div className='testimonies__wrapper'>
        <Testimonials/>
        <Testimonials/>
        <Testimonials/>
        <Testimonials/>

      </div>
      
    </div>
  )
}

export default TestimonyGroup
