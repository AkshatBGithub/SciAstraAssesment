import React from 'react'
import './MentorCard.css'
import image from '../images/img1.jpg'

export default function MentorCard(props) {
  return (
    <div className='mentorCard'>
      <div className='mentorCard__imageWrapper'>
        <img src={image} alt="IMG" className='mentorCard__image'/>
      </div>
      <div className='mentorCard__info'>
        <span className='mentorCard__info__name'>{props.name}</span>
        <div className='mentorCard__info__description'>{props.description}</div>
      </div>
      <button className='mentorCard__button'>Message Now</button>
      
    </div>
  )
}
