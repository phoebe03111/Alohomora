import React from 'react';
import profile from '../../assets/icons/user-circle-solid.svg';
import './Header.scss';


const Header = () => {

  return (
    <div className='header'>   
        <div className='header__image-wrapper'>
          <p>Alohamora</p>   
        </div>

        <div className='header__left-menu'>
          <p className='header__about'>Explore</p>
          <p className='header__about'>About</p>
          <p className='header__contact'>Contact</p>
          <img className='header__profile' src={profile}/>

           
        </div> 
    </div>
  )
}

export default Header

