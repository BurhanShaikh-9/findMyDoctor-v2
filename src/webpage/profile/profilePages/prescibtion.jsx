import React from 'react'

export const Prescibtion = () => {
  return (
    <>
      <div className="profileWrapper">
        <div className="header">
          <div className="heading">
            <p className='mainHeading'>Prescriptions</p>
            <p>My Prescriptions, managing your medications has never been easier.</p>
          </div>
          <div className="headerButton">
          </div>

        </div>
        <div className="body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Doc Name</th>
                  <th>Time</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lorem ipsum dolor sit amet consectetur.</td>
                  <td>15/2/2022</td>
                  <td>Ejaz</td>
                  <td>15/2/2022</td>
                  <td>Lorem ipsum dolor sit amet consectetur </td>
                </tr>
                <tr>
                  <td>Lorem ipsum dolor sit amet consectetur.</td>
                  <td>15/2/2022</td>
                  <td>Ejaz</td>
                  <td>15/2/2022</td>
                  <td>Lorem ipsum dolor sit amet consectetur </td>
                </tr>
                <tr>
                  <td>Lorem ipsum dolor sit amet consectetur.</td>
                  <td>15/2/2022</td>
                  <td>Ejaz</td>
                  <td>15/2/2022</td>
                  <td>Lorem ipsum dolor sit amet consectetur </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
