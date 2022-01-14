import React from 'react';
import './TestimonyGroup.scss';
import  Testimonials  from '../Testimonials/Testimonials';

const TestimonyGroup = () => {
  return (
    <div className='testimonies'>
      <h1 className='testimonies__title'>Reviews</h1>
      <p className='testimonies__rating-wraper'><span className='testimonies__rating'>4.5</span><span className='testimonies__review'>(4 reviews)</span></p>
      <div className='testimonies__wrapper'>
        <Testimonials/>
        

      </div>
      
    </div>
  )
}

export default TestimonyGroup
