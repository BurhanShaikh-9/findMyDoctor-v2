import React from 'react'

export const Reports = () => {
  return (
    <>
      <div className="profileWrapper">
        <div className="header">
          <div className="heading">
            <p className='mainHeading'>Reports</p>
            <p>Medical Reports, your health Information at your fingertips.</p>
          </div>

        </div>
        <div className="body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Lab Name</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Report For</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CBC</td>
                  <td>Dow Lab</td>
                  <td>10:00</td>
                  <td>15/2/2022</td>
                  <td>Ejaz</td>
                  <td><i className="bi bi-download delete"></i></td>
                </tr>
                <tr>
                  <td>CBC</td>
                  <td>Dow Lab</td>
                  <td>10:00</td>
                  <td>15/2/2022</td>
                  <td>Ejaz</td>
                  <td><i className="bi bi-download delete"></i></td>
                </tr>
                <tr>
                  <td>CBC</td>
                  <td>Dow Lab</td>
                  <td>10:00</td>
                  <td>15/2/2022</td>
                  <td>Ejaz</td>
                  <td><i className="bi bi-download delete"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
