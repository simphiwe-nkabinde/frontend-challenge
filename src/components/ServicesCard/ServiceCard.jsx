import React from 'react'
import './serviceCard.scss'

export default function ServiceCard({data}) {
    return (
        <div className='serviceCard col mb-4 mb-lg-0'>
            <img src={data.icon} alt={`${data.title} icon`} />
            <h3 className='fs-4 mt-3 mb-1 my-md-4 my-lg-5'>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    )
}