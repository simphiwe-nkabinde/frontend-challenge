import React from 'react'
import './footer.scss'


export default function Footer() {
    return (
        <footer className='text-light'>
            <h2 className='heading fw-normal fs-5 heading-tag mb-4'>Contact Us</h2>
            <h3 className='title display-6 fw-bold' style={{ maxWidth: '455px' }}>Have a project in mind? Let's make it happen</h3>
            <p className='address'>
                22 Street Name, Suburb, 8000,<br />
                Cape Town, South Africa<br />
                +27 21 431 0001<br />
                <a className='text-light' href='#'>enquirie@website.co.za</a>
            </p>
            <div className='terms'>
                <a href="#">Terms of service</a>
                <a href="#">Privacy policy</a>
                <a href="#">Impressum</a>
            </div>
            <div className='socials footer-links d-flex justify-content-between'>
                <div className='me-2'>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                </div>
                <div className='me-2'>
                    <a href="#">Github</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Teams</a>
                </div>
                <div className='me-2'>
                    <a href="#">Youtube</a>
                    <a href="#">Beehive</a>
                    <a href="#">Dribble</a>
                </div>
            </div>
            <div className='details'>
                <a href="#">Explore open jobs</a>
                <br />
                <a href="#">©2000—2023 Company Name</a>
            </div>
        </footer>
    )
}