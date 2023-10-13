import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CaseCard from '../CaseCard/CaseCard'
import SectionHeading from '../SectionHeading/SectionHeading'

export default function CasesSection() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/')
        .then(res => {
            if (res.status == 200) setData(res?.data)
        })
        .catch(err => {
            //
        })
    }, [])

    return (
        <section id='cases' className='container'>
            <SectionHeading title='Case Studies'/>
            <div className='d-flex overflow-x-hidden'>
                {
                    data.map((item,index) => (
                        <CaseCard key={index} data={item}/>
                    ))
                }
            </div>
        </section>
    )
}