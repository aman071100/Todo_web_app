import React from 'react'

function StickForm() {
  return (
    <div className='StickForm-container'>
         <button type="button" className="btn btn-danger my-button2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                Get Your Kundlii At Only ₹ 99/-
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    {/* <label htmlFor="recipient-name" className="col-form-label">Recipient:</label> */}
                                    <input type="text" className="form-control" id="recipient-name" placeholder='Name' />
                                </div>
                                <div className="mb-3">
                                    <label className="col-form-label">Date of Birth:</label>
                                    <input type="text" className="form-control custom-form-class" id="recipient-name" placeholder='Date of Birth' />
                                    <input type="text" className="form-control custom-form-class" id="recipient-name" placeholder='Birth Location' />
                                    <input type="text" className="form-control custom-form-class" id="recipient-name" placeholder='Birth Time' />
                                    <input type="text" className="form-control custom-form-class" id="recipient-name" placeholder='Contact No.' />
                                    <input type="text" className="form-control custom-form-class" id="recipient-name" placeholder='Occupation' />
                                    <textarea className="form-control" id="message-text" placeholder='Your Problem'></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" className="btn btn-danger my-button1">Send</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default StickForm