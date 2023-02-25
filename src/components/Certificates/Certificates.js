import "./Certificates.css"

import React from 'react'

const Certificates = () => {
  return (
    <div className="certificate-container">
      <h1 className="heading">Certifications</h1>
      <div className="container">
        <div className="sub">
          <h4 className="title">HTML, CSS, and JS for Web Developers</h4>
          <label>-from coursera</label>
        </div>

        <div className="sub">
          <h4 className="title">Programming in Java</h4>
          <label>-from NIIT</label>
        </div>

        <div className="sub">
          <h4 className="title">Programming for Everybody (Getting Started with Python)</h4>
          <label>-from coursera</label>
        </div>
      </div>
    </div>
  )
}

export default Certificates
