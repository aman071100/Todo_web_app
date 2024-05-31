import React from 'react'

function ReasonToChoose() {
    const data = [
        {
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJxGWxGPcY8CGHiUKuCJqtoEEmv6LB_Ap87vG3vRPf1CE15jd9",
            cardName: "10+ YEARS OF EXPERIENCE",
            info1: "Our astrologers are the experts in",
            info2: "there own field.",
        }, {
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRa-lXHAIJ7xLfqvxo_Ea1snQ4UKd0IWQ6eOCFzEcCtHalsObP3",
            cardName: "5300+ HAPPY CUSTOMERS",
            info1: "Once you connect with is you are",
            info2: "not going anywhere else",
        }, {
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4tBGHyiYL9nq7R1SCYGhW8WUgpXmxi9R8_RvVdRpymdqT3j8V",
            cardName: "WORLDWIDE CLIENTS",
            info1: "4000+ Happy International ",
            info2: "clients",
        }, {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4fdT1q86sLKvTOIaRNfIwfG6GvOu8SRsaazEP4PihfIZRuzb",
            cardName: "EFFECTIVE SOLUTIONS",
            info1: "100% Guranteed ",
            info2: "Solutions.",
        }, {
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQS-53ka5YWx_QA6YAj1zh-0Oc1lk-BdVWJH_qge6w_CGzpGH6I",
            cardName: "ASSURED PRIVACY",
            info1: "All your personal information",
            info2: "remains personal with us.",
        }, {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGXVRJDvL0_tzQFS_33yBb1fW9Z4hDKzomnYnBxE3CG-Efn4DD",
            cardName: "SAFE AND SECURE",
            info1: "Process is completely Safe and",
            info2: "Secure,",
        }
    ]
    return (
        <div className='ReasonToChoose-container'>
            <div className='upper-section'>
                <p className='problem-heading1'>But Don't Just Take our Words for Granted</p>
                <p className='heading1'>Here is Why You Should Choose Us</p>
                <p className='problem-heading1'>Astro Parivar is the Best In India, Just Make the Call and See your self.</p>
            </div>
            <div className="lower-section">
                {data?.map((val, index) => (<div key={val?.cardName} className={`upper-card2 bgWhite`}>
                    <img className="card-image2" src={val?.image} alt='image' />
                    <p className='card-text-class3'>{val?.cardName}</p>
                    <p className='card-text-class5'>{val?.info1}</p>
                    <p className='card-text-class5'>{val?.info2}</p>
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

export default ReasonToChoose