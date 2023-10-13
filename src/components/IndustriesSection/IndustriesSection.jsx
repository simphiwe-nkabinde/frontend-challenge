import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Divider from '../Divider'
import './industriesSection.scss'

const brandImages = [
  'visa-black.svg',
  'tyme-bank-black.svg',
  'distell-black.svg',
  'spotify-black.svg',
  'microsoft-black.svg',
  'engen-black.svg',
  'nike-black.svg',
  'wesgrow-black.svg',
  'multichoice-black.svg',
  'pnp-black.svg',
  'liquid.svg',
  'tfg-black.svg',
  'sanlam-black.svg',
  'santam-black.svg',
  'bbc-black.svg'
]

export default function IndustriesSection() {
  return (
    <section id='services' className='container'>
      <SectionHeading title="You'll be in good company" />
      <h3 className='display-5 fw-bold'>Trusted by leading brands</h3>
      <Divider height={87}/>
      <div className='d-flex flex-wrap'>
        {
          brandImages.map((brandImg, index) => (
            <div className='brand-wrapper'>
              <img key={index} src={brandImg} alt=""  />
            </div>
          ))
        }
      </div>
    </section>
  )
}