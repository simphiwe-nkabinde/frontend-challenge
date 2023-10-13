import React from 'react'
import './sectionHeading.scss'

export default function SectionHeading({title}) {
  return (
    <h2 className='fw-normal fs-4 heading-tag mb-5'>{title}</h2>
  )
}