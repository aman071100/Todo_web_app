import React from 'react'

function Service() {
    return (
        <div className='service-container'>
            <div className='left-section'>
                <div className="upper-card-section">
                    <div className="upper-card">
                        <img className="card-image" src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRU5WjVtFUOrsURbX8LUTVmQBqpIVuYy3fO5007-d11kDvJEIAn' alt='image'/>
                        <p className='card-text-class1'>Personalized Insights</p>
                        <p className='card-text-class2'>Get customized guidance based on your problems</p>
                        <p className='card-text-class2'>on your problems</p>
                    </div>
                    <div className="upper-card">
                        <img className="card-image" src='https://media.istockphoto.com/id/1203564601/vector/personnel-change-line-icon-people-in-round-cycle-symbol-human-resource-concept-vector.jpg?s=612x612&w=0&k=20&c=fcrnexwcAN1zhIk6YLukS7cKdV9ckCRcIncz-JaVbaU=' alt='image'/>
                        <p className='card-text-class1'>Transformational Results</p>
                        <p className='card-text-class2'>Unlock the power to transform</p>
                        <p className='card-text-class2'>your life path</p>
                    </div>
                </div>

                <div className="upper-card-section">
                    <div className="upper-card">
                        <img className="card-image" src='https://media.istockphoto.com/id/1368764243/vector/360-degrees-camera-coverage-icon-virtual-tour-symbol.jpg?s=612x612&w=0&k=20&c=SrNyRBv12LzxN8oELFJ1DVl4eQhgk7RV_1B728Pgq3M=' alt='image'/>
                        <p className='card-text-class1'>Comprehensive Coverage</p>
                        <p className='card-text-class2'>Get insights on relationships,</p>
                        <p className='card-text-class2'>health, and finances</p>
                    </div>
                    <div className="upper-card">
                        <img className="card-image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EIEOCyoJenbA9CTLAROtr05AFMPgZHyo6Q&s' alt='image'/>
                        <p className='card-text-class1'>Easy to Understand</p>
                        <p className='card-text-class2'>Our report uses simple language</p>
                        <p className='card-text-class2'>for easy understanding</p>
                    </div>
                </div>

                <button type="button" className="btn btn-danger my-button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
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
                <p className='contact'>Call Us Directly @ 98599 35935</p>
            </div>
            <div>
                <div>
                    <img className="right-img" src="https://astroparivar.com/wp-content/uploads/2023/09/KUNDALI-99-6-min-1024x1024.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Service