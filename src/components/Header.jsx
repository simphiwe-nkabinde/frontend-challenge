import React from 'react'

export default function Header() {
  return (
    <header className='bg-primary px-3' style={{height:'80px'}}>
    <nav className='d-flex justify-content-between align-items-center py-2 px-3 h-100'>
      <a href="">
        <img src="/logo.svg" alt="" />
      </a>
      <div className='small fw-bold'>
        <a className='text-light text-decoration-none py-2 px-3' href="">
          Service
          </a>
        <a className='text-light text-decoration-none py-2 px-3' href="">
          Industries</a>
        <a className='text-light text-decoration-none py-2 px-3' href="">
          Cases
        </a>
        <a className='text-light text-decoration-none py-2 px-3' href="">
          Contact
        </a>
      </div>
      <button className='btn btn-sm py-2 px-3 text-primary fw-bold bg-white rounded-pill'>
        Let's Talk
      </button>
    </nav>
  </header>
  )
}