import React from 'react'

function Problems() {
    const data = [
        {
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkJZj94Hvf4WwWWvLxMzOQE1NTyhhIJCGa_MiIt0hobCnj93Gh",
            cardName : "Online Pooja",
            info1 : "Experience divine blessings and",
            info2: "spiritual solutions through our",
            info3 :"personalized online puja services."
        },{
            image : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQlFee817NEb3wDdmSVrRNxGNjxn3JW67FjAyByXjS8Zx3ps7kM",
            cardName : "Numerology",
            info1 : "Delve into the power of numbers",
            info2: "to gain profound insights and",
            info3 :"make informed life decisions."
        },{
            image : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5bnKTHIaCawOmA_eMnPvI3VsRib5Lf2jw2keZbpcIusFYSGRZ",
            cardName : "Palmistry Astrology",
            info1 : "Unlock the secrets of your palm",
            info2: "and gain profound insights into",
            info3 :"your life's journey."
        },{
            image : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDdj2tbcaoFOgCLvwmZ_9l2L3JUIJD8t7NCskiY948-IQCf7vH",
            cardName : "Business Problem",
            info1 : "Overcome hurdles and unlock",
            info2: "success in your entrepreneurial",
            info3 :"journey with expert guidance."
        },{
            image : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVks3NHAE7QTsKxfKOesecBDDM9A8Qh4z7RWgh47iMN-2_75Kx",
            cardName : "Future Prediction",
            info1 : "Gain insights into future events,",
            info2: "make informed decisions, and",
            info3 :"prepare for what lies ahead."
        },{
            image : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQD0z4ZmgsmZwC1-D168Gd2HlpbuM7flq_bqqV04kU5Z9Lvg3Sr",
            cardName : "Janam Kundali",
            info1 : "Discover the hidden influences",
            info2: "and cosmic energies that shape",
            info3 :"your destiny."
        },{
            image : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRN6TyaTqA-b5e3I8lLzaYFa7x1D1jXC-Q9AVV20hsOMSknIpio",
            cardName : "Love Problem",
            info1 : "Heal relationship issues, ignite",
            info2: "love, and foster a deep connection",
            info3 :"with expert guidance."
        },{
            image : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTatKPVre7L7PS-uMNQyzkMK05H9xJymYcX3M-F6nmQXq8yFWTz",
            cardName : "Marriage Problem",
            info1 : "Restore harmony and resolve",
            info2: "conflicts for a blissful married,",
            info3 :"Love and Relationship Life."
        },{
            image : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTcFkmLMwUk7txxn4Y_emnat5U-yPaRXedha4rbgsatEAleHI0r",
            cardName : "Career Problem",
            info1 : "Overcome career hurdles and",
            info2: "unlock opportunities for",
            info3 :"professional growth and success."
        },{
            image : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQpoXrO69LdGWJU0ilLsrBGGTaD1gGYXCeFRQ207QfPhgAqpFU1",
            cardName : "Children Problem",
            info1 : "Find solutions for parenting",
            info2: "challenges, academic obstacles,",
            info3 :"and nurturing your child's well-being."
        },{
            image : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMk8UsKspL5_64yhPMNVuaLotTIkXW6SPhIKn2Lo80-K1EnnRm",
            cardName : "Vastu Shastra",
            info1 : "Transform your surroundings with",
            info2: "ancient principles for positive",
            info3 :"energy and balanced living spaces."
        },{
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAsBNWAzzBmCaVGh7NzJuGJo6kXYGLzyzHjg6odQ_s7aLnwew",
            cardName : "Visa Problem",
            info1 : "Overcome obstacles in obtaining",
            info2: "visas or resolving international",
            info3 :"travel challenges with our astrologer."
        }
    ]
    return (
        <div className='problem-container'>
            <div className='upper-section'>
                <p className='problem-heading'>We know that there are lots of problems in your life</p>
                <p className='heading'>Let Us Know Which Problem You are Facing Right Now</p>
                <p className='problem-heading'>We have a Guranteed Solution For These</p>
            </div>
            <div className="lower-section">
                {data?.map((val, index)=>(<div key={val?.cardName} className={`upper-card1 ${index % 2 === 0? 'bgOrange':'bgWhite'}`}>
                    <img className="card-image" src={val?.image} alt='pic' />
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
                                    <input type="text" className="form-control" id="recipient-name" placeholder='Name'/>
                                </div>
                                <div className="mb-3">
                                    <label  className="col-form-label">Date of Birth:</label>
                                    <input type="text" className="form-control custom-form-class" id="recipient-name" placeholder='Date of Birth'/>
                                    <input type="text" className="form-control custom-form-class" id="recipient-name" placeholder='Birth Location'/>
                                    <input type="text" className="form-control custom-form-class" id="recipient-name" placeholder='Birth Time'/>
                                    <input type="text" className="form-control custom-form-class" id="recipient-name" placeholder='Contact No.'/>
                                    <input type="text" className="form-control custom-form-class" id="recipient-name" placeholder='Occupation'/>
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

export default Problems