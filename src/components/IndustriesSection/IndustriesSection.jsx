import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Divider from '../Divider'
import './industriesSection.scss'
import { industryLogos } from '../../data/industryLogos'

export default function IndustriesSection() {
  return (
    <section id='industries' className='container'>
      <SectionHeading title="You'll be in good company" />
      <h3 className='display-5 fw-bold'>Trusted by leading brands</h3>
      <Divider height={87} />
      <div className='brands-container'>
        {
          industryLogos.map((logo, index) => (
            <img className='img-fluid' key={index} src={logo.filename} alt={logo.altText} />
          ))
        }
      </div>
    </section>
  )
}