import React from 'react'

const navItems = [
    { name: 'services', path: '/' },
    { name: 'industries', path: '/' },
    { name: 'cases', path: '/' },
    { name: 'contact', path: '/' }
]

export default function Header() {
    return (
        <header className='bg-primary px-3 d-flex align-items-center' style={{ minHeight: '80px' }}>
            <nav className='navbar navbar-expand-md align-items-center py-2 px-3 h-100 w-100'>
                <a className="navbar-brand" href="#">
                    <img src="/logo.svg" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='mt-0 mt-md-0 small fw-bold collapse navbar-collapse justify-content-around' id='navigationBar'>
                    <ul className='navbar-nav text-light'>
                        {
                            navItems.map((navLink, index) => (
                                <li className='nav-item py-2 px-3'>
                                    <a className='nav-item text-light text-decoration-none text-capitalize'
                                        aria-current="page"
                                        href={navLink.path}>
                                        {navLink.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <button className='d-md-none my-2 btn btn-sm py-2 px-3 text-primary fw-bold bg-white rounded-pill'>
                        Let's Talk
                    </button>
                </div>
                <button className='d-none d-md-inline btn btn-sm py-2 px-3 text-primary fw-bold bg-white rounded-pill'>
                    Let's Talk
                </button>
            </nav>
        </header>
    )
}