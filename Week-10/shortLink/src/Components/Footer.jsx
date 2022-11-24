import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer-container'>
        <footer id='footer-div' className='container-fluid bg-dark d-flex flex-row justify-content-between p-5'>

            <h1 className='align-self-center footer-company-name'>Shortlink<span className='copyright-year'>©2023</span></h1>

            <div className='d-flex flex-column align-items-start align-self-baseline'>
                <h5 className='text-light text-decoration-none'>Features</h5>
                <a className='text-decoration-none anchor-hover' href="">Link Shorting</a>
                <a className='text-decoration-none anchor-hover' href="">Branded Links</a>
                <a className='text-decoration-none anchor-hover' href="">Analytics</a>
            </div>

            <div className='d-flex flex-column align-items-start align-self-baseline'>
                <h5 className='text-light text-decoration-none'>Resources</h5>
                <a className='text-decoration-none anchor-hover' href="">Blog</a>
                <a className='text-decoration-none anchor-hover' href="">Developers</a>
                <a className='text-decoration-none anchor-hover' href="">Support</a>
            </div>

            <div className='d-flex flex-column align-items-start align-self-baseline'>
            <h5 className='text-light text-decoration-none'>Company</h5>
                <a className='text-decoration-none anchor-hover ' href="">About</a>
                <a className='text-decoration-none anchor-hover' href="">Our Team</a>
                <a className='text-decoration-none anchor-hover' href="">Careers</a>
                <a className='text-decoration-none anchor-hover' href="">Contact</a>
            </div>

            <div className='d-flex flex-row align-self-center'>
                <h5><a className='text-decoration-none mx-2 anchor-hover' href=''>Login</a></h5>
                <h5><a className='text-decoration-none mx-2 anchor-hover' href="">Sign Up</a></h5>
            </div>
        </footer>

        </div>
        
  )
}

export default Footer