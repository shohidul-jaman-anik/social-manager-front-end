import React from 'react';
import "./OurPlan.css";


const OurPlan = () => {
    return (
        <div className='planContainer container'>
            <div className='planTitle'>
                <h2>Our Plan</h2>
                <div>
                    <p>SocialReachPro’s goal is to make it as quick and easy as possible</p>
                    <p>for you to prepare and run your Facebook parties.</p>
                </div>
            </div>


            <div className='planCardContainer'>
                <div className='planCard'>
                    <h4>STARTER</h4>
                    <div className="planDescription">
                        <p>10 users included</p>
                        <p>2 GB of storage</p>
                        <p>Email support</p>
                        <p>help center access</p>
                    </div>
                    <div>
                        <h1 className='pricePlan1'>$20</h1>
                        <button>Buy now</button>
                    </div>
                </div>
                <div className='planCard'>
                    <h4>PRO</h4>
                    <div className="planDescription">
                        <p>20 users included </p>
                        <p>5GB of storage</p>
                        <p>Email support</p>
                        <p>Help center access</p>
                        <p>Phone support</p>
                        <p>Community access</p>
                    </div>
                    <div>
                        <h1 className='pricePlan'>$30</h1>
                        <button>Buy now</button>
                    </div>
                </div>
                <div className='planCard'>
                    <h4>STARTER</h4>
                    <div className="planDescription">
                        <p>10 users included</p>
                        <p>2GB of storage </p>
                        <p>Email support</p>
                        <p>Help center access</p>
                    </div>
                    <div>
                        <h1 className='pricePlan3'>$20</h1>
                        <button>Buy now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurPlan;