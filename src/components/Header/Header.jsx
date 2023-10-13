import React from 'react'
import './header.scss'

const navItems = [
    { name: 'services', path: '/#services' },
    { name: 'industries', path: '/#industries' },
    { name: 'cases', path: '/#cases' },
    { name: 'contact', path: '/#contact' }
]

export default function Header() {
    return (
        <header className='bg-primar px-3 d-flex align-items-center'>
            <nav className='navbar navbar-expand-md align-items-center py-2 px-3 h-100 w-100'>
                <a className="navbar-brand" href="#">
                    <img className='d-none d-md-inline' src="/logo.svg" alt="Brand logo" />
                    <img className='d-md-none' src="/logo-dark.svg" alt="Brand logo" />
                </a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="hamburger.svg" alt="" role='menu' />
                </button>
                <div className='mt-0 mt-md-0 small fw-bold collapse navbar-collapse justify-content-around' id='navigationBar'>
                    <ul className='navbar-nav text-light'>
                        {
                            navItems.map((navLink, index) => (
                                <li key={index} className='nav-item py-2 px-3'>
                                    <a className='nav-item text-primary text-decoration-none text-capitalize'
                                        aria-current="page"
                                        href={navLink.path}>
                                        {navLink.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <button aria-label='chat' className='d-md-none my-2 btn btn-sm py-2 px-3 text-light fw-bold bg-primary rounded-pill'>
                        Let's Talk
                    </button>
                </div>
                <button aria-label='chat' className='d-none d-md-inline btn btn-sm py-2 px-3 text-primary fw-bold bg-white rounded-pill'>
                    Let's Talk
                </button>
            </nav>
        </header>
    )
}