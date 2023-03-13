import React from 'react'

export const Logout = () => {
  return (
    <>
       <div className="profileWrapper">
        <div className="header">
          <div className="heading">
            <p className='mainHeading'>Logout</p>
          </div>
        </div>
        <div className="body">
          <p className='mainPara'>Are you sure you want to Logout?</p>
          <button className='accept'>Yes</button>
        </div>
      </div>
    </>
  )
}
