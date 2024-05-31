import React from 'react'

function Feedback() {
    return (
        <div className='feedback-container'>
            <div className='upper-section'>
                <p className='problem-heading'>Don't Believe Us? See what Our Happy Customer Say About us</p>
                <p className='heading'>Here Are Some of The Kind Words We Hear Everday</p>
                <p className='problem-heading'>You Will Also say the Same for Us After the Call 🙂</p>
            </div>
            <div className="lower-section">
                <div id="carouselExampleDark" className="carousel carousel-dark slide carouselClass">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner new-class">
                        <div className="carousel-item active custom" data-bs-interval="10000">
                            <img src="https://astroparivar.com/wp-content/uploads/2023/06/sharad-300x215.webp" className="d-block w-100 imgClass" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='carousekText'>Manoj</h5>
                                <p className='carousekText'>
                                    Unbelievably accurate! Astro Parivar changed my life with their Kundali and insightful tips. Forever grateful.</p>
                            </div>
                        </div>
                        <div className="carousel-item custom" data-bs-interval="2000">
                            <img src="https://astroparivar.com/wp-content/uploads/2023/06/lady-225x300.jpg" className="d-block w-100 imgClass" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='carousekText'>Lalita</h5>
                                <p className='carousekText'>Astro Parivar, my cosmic companion! Their website transformed my life with accurate predictions and heartfelt guidance. Forever grateful.</p>
                            </div>
                        </div>
                        <div className="carousel-item custom">
                            <img src="https://astroparivar.com/wp-content/uploads/2023/06/lady-2-240x300.jpg" className="d-block w-100 imgClass" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='carousekText'>Priya</h5>
                                <p className='carousekText'>
                                    Astro Parivar, my guiding star! Their website's divine wisdom and personalized readings have profoundly shaped my journey. Forever indebted</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Feedback