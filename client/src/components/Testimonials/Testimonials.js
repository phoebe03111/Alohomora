import React from 'react';
import reviewer from '../../assets/icons/user-alt-solid.svg';
import star from '../../assets/icons/star.svg'
import './Testimonials.scss';

 const Testimonials = () => {
  let fakeData = [
    {
      name: "Chris",
      date: 'Jan 2022',
      image_url:
        reviewer,
        rating: '4.3',
        stars: `${star}`,
        reviews: 'Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her.'
    },
    {
      name: "Tom",
      date: 'Jan 2022',
      image_url:
        reviewer,
        stars: `${star}`,
        rating: '4.8',
        reviews: 'Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her.'
    },
    {
      name: "Berry",
      date: 'Jan 2022',
      image_url:
        reviewer,
        stars: `${star}`,
        rating: '4.5',
        reviews: 'Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her.'
    },
    {
      name: "Holly",
      date: 'Jan 2022',
      image_url:
        reviewer,
        rating: '4.7',
        stars:`${star}`,
        reviews: 'Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her.'
    },
  ]
    
  return (
    fakeData.map(fakeData =>{

    return (<div key={fakeData.id} className="testimony">

      <div className="testimony__img-container">
          <img className="testimony__img" src={fakeData.image_url} alt="" />
        <div>
          
            <h1 className="testimony__name">{fakeData.name}</h1>
            <p className="testimony__date">{fakeData.date}</p>
         
        </div>
        <div className='testimony__rating-star'>
          <img className="testimony__revier" src={fakeData.stars}/>
          <p>{fakeData.rating}</p>
        </div>
      </div>

      <div className="card__text-container">
        <p className="card__description">{fakeData.reviews}</p>
      </div>
    </div>)
    } )

    
  )
}
export default Testimonials;
