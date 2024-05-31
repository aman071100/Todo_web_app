import React from 'react'

function Faq() {
    return (
        <div className='faq-container'>
            <div className='faq-child'>
                <div className='upper-section'>
                    <p className='problem-heading'>Still Have Some Queries left? Don't Worry we Got you!</p>
                    <p className='heading'>HERE ARE SOME OF THE FAQ'S ABOUT ASTRO PARIVAR</p>
                    <p className='problem-heading'>Feel free to ask any doubts about any problem you facing</p>
                </div>
                <div className="accordion custom-accordian" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button accordion-button1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is astrology and how can it benefit me?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Astrology is the ancient practice of studying celestial bodies to gain insights into human affairs and personality traits.

                                It offers a profound understanding of your unique cosmic blueprint, guiding you on your life’s journey.

                                Astrology can benefit you by providing clarity, self-awareness, and a deeper understanding of your relationships, career, and life’s purpose.

                                At AstroParivar, we passionately embrace the transformative power of astrology to empower individuals like you, offering personalized consultations, insightful guidance, and compassionate support to help you navigate life’s challenges and unlock your true potential.

                                For Any Solution you can Call Us directly @9859924924‬
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed accordion-button1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How accurate are astrological predictions?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Astrological predictions are based on the alignment and movements of celestial bodies, as well as the interpretation of birth charts.

                                While astrology is not an exact science, it has been practiced and trusted for centuries.

                                Our team of experienced astrologers at AstroParivar combines their expertise, intuition, and deep cosmic knowledge to offer accurate and insightful predictions. However, it’s important to remember that astrology is a tool for guidance and self-discovery, and personal choices and free will also play a role in shaping your future.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed accordion-button1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Can astrology help me in my relationships?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Absolutely! Astrology can offer valuable insights into your relationships. By analyzing the birth charts of individuals involved, astrologers can uncover compatibility, potential challenges, and areas of growth within the relationship. Whether you seek guidance in romantic relationships, family dynamics, or friendships, AstroParivar’s astrology consultations can provide you with a deeper understanding of your connections, helping you foster healthier and more fulfilling relationships.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Faq