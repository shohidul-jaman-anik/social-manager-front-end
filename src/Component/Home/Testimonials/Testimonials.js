import React from 'react';
import client1 from "../../../Asset/Screen Shot 2023-09-16 at 12.23 1.png";

const Testimonials = () => {
    return (
        <div>
            <h2>Testimonials</h2>
            <div className='testimonialContainer container'>
                <div>
                    <img src={client1} alt="" srcset="" />
                    <h3>Martha V.</h3>
                    <p>CEO of NCA Network</p>
                    <p>“Testimonial Text Here Testimonial Text Here Testimonial Text Here
                        Testimonial Text Here Testimonial Text Here Testimonial Text Here
                        Testimonial Text Here”</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Testimonials;