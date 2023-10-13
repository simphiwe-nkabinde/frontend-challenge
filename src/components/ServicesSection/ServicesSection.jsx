import React from 'react'
import { services as data } from '../../data/services'
import ServiceCard from '../ServicesCard/ServiceCard'
import Divider from '../Divider'
import SectionHeading from '../SectionHeading/SectionHeading'

export default function ServicesSection() {
    return (
        <section id='services' className='container'>
            <SectionHeading title='What we do'/>
            <p className='fw-bold display-5'>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</p>
            <Divider height={56} />
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
                {
                    data.map((service, index) => (
                        <ServiceCard key={index} data={service}/>
                    ))
                }                
            </div>
        </section>
    )
}