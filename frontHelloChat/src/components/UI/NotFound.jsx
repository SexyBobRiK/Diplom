import React from 'react'
import '../../app/css/NotFound.css'
import logo from '../../assets/logo/NotFoundLogo.png'
export default function NotFound() {
  return (
    <>
    <div className="not-found">
      <div className="not-found-content">
        <div className="not-found-icon">
          <span role="img" aria-label="sad face"><img src={logo} alt="" /></span>
        </div>
        <h1 className='title-not-found'>404</h1>
        <h2 className='oops-not-found'>OOPS! PAGE NOT BE FOUND</h2>
        <p className='desc-not-found'>
          Sorry, but the page you are looking for does not exist, has been removed,
          name changed, or is temporarily unavailable.
        </p>
      </div>
    </div>
    </>
  )
}
