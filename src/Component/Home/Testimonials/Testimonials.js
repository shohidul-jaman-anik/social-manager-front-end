import React from 'react';
import client1 from "../../../Asset/Screen Shot 2023-09-16 at 12.23 1.png";
import mobileImg from "../../../Asset/phones 1.png";
import './Testimonial.css';

const Testimonials = () => {
    return (
        <div className='testimonialMain'>
            <h2 className='testimonialTitle'>Testimonials</h2>
            <div className='testimonialContainer '>
                <div className="testimonialLeftCol">
                    <div className='ClientImgDiv'> 
                      <img className='clientImg' src={client1} alt="" srcset="" />
                    </div>
                    <h3>Martha V.</h3>
                    <p>CEO of NCA Network</p>
                    <p>
                    <p>Testimonial Text Here Testimonial Text Here Testimonial Text Her </p> 
                    <p>Testimonial Text Here Testimonial Text Here Testimonial Text Her</p>
                    <p>Testimonial Text Here Testimonial Text Here Testimonial Text Her</p>
                    </p>
                </div>
                <div className='testimonialRighCol'>
                    <img src={mobileImg} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;