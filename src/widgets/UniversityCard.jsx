import React from 'react'

import './UniversityCard.css'

export default function UniversityCard(props) {
  return (
    <div className='universityCard'>
      <div className='universityCard__info'>
        <div className='universityCard__info__name'>{props.name}</div>
      </div>
    </div>
  )
}
