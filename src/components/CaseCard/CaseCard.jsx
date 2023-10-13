import React from 'react'
import './caseCard.scss'

export default function CaseCard({ data }) {
  return (
    <div className='mx-4 caseCard-container d-flex align-items-end' style={{backgroundImage: `url(${data.imageUrl})`}}>
      <div className='text-light card-content p-4'>
        <h3 className='fs-2'>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  )
}