import React from 'react'

function Benifits() {

    const data = [
        {
            image: "https://astroparivar.com/wp-content/uploads/2023/06/11.png",
            cardName: "Self-Discovery",
            info1: "Gain deep self-awareness, uncover",
            info2: "hidden strengths, and embrace your true potential",
            info3: "for personal growth and empowerment."
        }, {
            image: "https://astroparivar.com/wp-content/uploads/2023/06/12.png",
            cardName: "Career Guidance",
            info1: "Unlock your professional strengths, identify",
            info2: "favorable opportunities, and align ",
            info3: "your career path with success and fulfillment."
        }, {
            image: "https://astroparivar.com/wp-content/uploads/2023/06/13.png",
            cardName: "Personal Relationships",
            info1: "Enhance all relationships, fostering",
            info2: "deeper connections and creating a",
            info3: "harmonious social network."
        }, {
            image: "https://astroparivar.com/wp-content/uploads/2023/06/Timing-and-Decision-Making.png",
            cardName: "Decision-Making",
            info1: "Make important life decisions with confidence",
            info2: "leveraging astrology's wisdom to",
            info3: "choose the most auspicious timing for success."
        }, {
            image: "https://astroparivar.com/wp-content/uploads/2023/06/Financial-Prosperity.png",
            cardName: "Financial Prosperity",
            info1: "Harness the cosmic energies to",
            info2: "attract abundance and create a",
            info3: "prosperous financial future."
        }, {
            image: "https://astroparivar.com/wp-content/uploads/2023/06/Health-and-Well-being.png",
            cardName: "Health and Well-being",
            info1: "Gain insights into your physical and mental",
            info2: "well-being, empowering you to ",
            info3: "make choices that promote vitality and balance."
        }
    ]
    return (
        <div className='benifits-container'>
            <div className='upper-section'>
                <p className='problem-heading1'>Still Confused ? Connect with Our experts Today!</p>
                <p className='heading1'>Unlock The Benefits of Astrology</p>
                <p className='problem-heading1'>And Start Seeing the Amazing benefits of getting aligned with your true purpose</p>
            </div>

            <div className="lower-section">
                {data?.map((val, index) => (<div key={val?.cardName} className={`upper-card2 bgWhite`}>
                    <img className="card-image1" src={val?.image} alt='image' />
                    <p className='card-text-class3'>{val?.cardName}</p>
                    <p className='card-text-class4'>{val?.info1}</p>
                    <p className='card-text-class4'>{val?.info2}</p>
                    <p className='card-text-class4'>{val?.info3}</p>
                </div>))}

            </div>
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

export default Benifits