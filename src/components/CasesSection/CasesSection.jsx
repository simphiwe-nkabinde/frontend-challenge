import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CaseCard from '../CaseCard/CaseCard'
import SectionHeading from '../SectionHeading/SectionHeading'

export default function CasesSection() {

    const [cases, setCases] = useState([])

    useEffect(() => {
        axios('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/')
            .then(res => {
                if (res.status == 200) setCases(res?.data)
            })
            .catch(err => {
                //
            })
    }, [])

    // scrolls the Case Cards Wrapper when there's overflowing content
    function scrollToLeft(e) {
        const sliderWrapper = e.currentTarget.nextSibling
        sliderWrapper.scrollLeft = sliderWrapper.scrollLeft - 290;
    }

    // scrolls the Case Cards Wrapper when there's overflowing content
    function scrollToRight(e) {
        const sliderWrapper = e.currentTarget.previousSibling
        sliderWrapper.scrollLeft = sliderWrapper.scrollLeft + 290;
    }

    return (
        <section id='cases' className='container'>
            <SectionHeading title='Case Studies' />
            <div className='d-flex'>
                <div className='d-flex align-items-center px-0' onClick={scrollToLeft}>
                    <button aria-label='scroll left' className='bg-transparent border-0 btn z-3 p-0'>
                        <i className="bi bi-chevron-left display-5  text-primary"></i>
                    </button>
                </div>
                <div className='d-flex flex-grow-1 overflow-x-scroll scroll-hidden smoothScroll px-0'>
                    {
                        cases.map((item, index) => (
                            <CaseCard key={index} data={item} />
                        ))
                    }
                </div>
                <div className='d-flex align-items-center px-0' onClick={scrollToRight}>
                    <button aria-label='scroll right' className='bg-transparent border-0 z-3 p-0'>
                        <i className="bi bi-chevron-right display-5  text-primary"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}