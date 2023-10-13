import React from 'react'
import './heroSection.scss'

export default function HeroSection() {
    return (
        <section className='hero-container text-light d-flex align-items-end p-5' >
            <div className='hero-content mb-4'>
                <h1 className='display-5 fw-bold mb-4'>Live with Confidence</h1>
                <p className='fs-5 mb-5'>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
                <button aria-label='view project' className='btn btn-sm fw-bold bg-primary rounded-pill text-light py-2 px-3'>
                    View project
                </button>
            </div>
        </section>
    )
}