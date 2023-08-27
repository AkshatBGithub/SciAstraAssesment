import React from 'react'
import image from '../images/img1.jpg'
import './TeamCard.css'

export default function TeamCard(props) {
  return (
    <div className='teamCard'>
      <div className='teamCard__imageWrapper'>
        <img src={image} alt="IMG" className='teamCard__image'/>
      </div>
      <div className='teamCard__info'>
        <span className='teamCard__info__name'>{props.name}</span>
        <div className='teamCard__info__description'>{props.description}</div>
      </div>
    </div>
  )
}
