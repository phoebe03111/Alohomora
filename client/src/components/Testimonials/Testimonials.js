import React from 'react';
import reviewer from '../../assets/icons/user-alt-solid.svg';
import './Testimonials.scss';

export const Testimonials = () => {
  let fakeData = {
    name: "Rebecca Clark",
    image_url:
      reviewer,
      stars: ['⭐','⭐','⭐','⭐','⭐' ],
      reviews: 'Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her.'
  };
  return (
    <div className="testimony">

      <div className="testimony__img-container">
          <img className="testimony__img" src={fakeData.image_url} alt="" />
        <div>
          <h1 className="testimony__name">{fakeData.name}</h1>
          <p className="testimony__reviews">{fakeData.stars}</p>
        </div>
      </div>

      <div className="card__text-container">
        <p className="card__description">{fakeData.reviews}</p>
      </div>
    </div>
  )
}
