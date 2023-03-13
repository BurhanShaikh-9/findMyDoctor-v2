import React from 'react'

export const Beneficiary = () => {
    return (
        <>
            <div className="profileWrapper">
                <div className="header">
                    <div className="heading">
                        <p className='mainHeading'>Beneficiaries</p>
                        <p>Beneficiaries, your well-being is our top priority.</p>
                    </div>
                    <div className="headerButton">
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal">Add Beneficiary</button>
                    </div>

                </div>
                <div className="body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Relationship</th>
                                    <th>Age</th>
                                    <th>Height</th>
                                    <th>Weight</th>
                                    <th>Phone No.</th>
                                    <th>#CNIC</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kamran Ali</td>
                                    <td>Brother</td>
                                    <td>22</td>
                                    <td>5.9 Feet</td>
                                    <td>62kg</td>
                                    <td>2471624712</td>
                                    <td>41304424243729</td>
                                    <td><i className="bi bi-pen edit"></i><i className="bi bi-trash3 delete"></i></td>
                                </tr>
                                <tr>
                                    <td>Kamran Ali</td>
                                    <td>Brother</td>
                                    <td>22</td>
                                    <td>5.9 Feet</td>
                                    <td>62kg</td>
                                    <td>2471624712</td>
                                    <td>41304424243729</td>
                                    <td><i className="bi bi-pen edit"></i><i className="bi bi-trash3 delete"></i></td>
                                </tr>
                                <tr>
                                    <td>Kamran Ali</td>
                                    <td>Brother</td>
                                    <td>22</td>
                                    <td>5.9 Feet</td>
                                    <td>62kg</td>
                                    <td>2471624712</td>
                                    <td>41304424243729</td>
                                    <td><i className="bi bi-pen edit"></i><i className="bi bi-trash3 delete"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Add Beneficiary</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="formBody">
                                        <div className="formRow">
                                            <label className="label">Name</label>
                                            <div className="formInput">
                                                <input type="text" placeholder='Enter Name' />
                                            </div>
                                        </div>
                                        <div className="formRow">
                                            <label className="label">Phone Number</label>
                                            <div className="formInput">
                                                <input type="number" placeholder='Enter Phone Number' />
                                            </div>
                                        </div>
                                        <div className="formRow">
                                            <label className="label">RelationShip</label>
                                            <div className="formInput">
                                                <input type="text" placeholder='Enter RelationShip' />
                                            </div>
                                        </div>
                                        <div className="formRow">
                                            <label className="label">CNIC No.</label>
                                            <div className="formInput">
                                                <input type="number" placeholder='Enter CNIC' />
                                            </div>
                                        </div>
                                        <div className="formRow">
                                            <label className="label">Age</label>
                                            <div className="formInput">
                                                <input type="number" placeholder='Enter Age' />
                                            </div>
                                        </div>
                                        <div className="formRow">
                                            <label className="label">Height</label>
                                            <div className="formInput">
                                                <input type="number" placeholder='Height in Feet' />
                                            </div>
                                        </div>
                                        <div className="formRow">
                                            <label className="label">Weight</label>
                                            <div className="formInput">
                                                <input type="number" placeholder='Weight in Kg' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type='submit '  data-bs-dismiss="modal" aria-label="Close">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
