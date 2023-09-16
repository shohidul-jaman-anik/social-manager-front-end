import React from 'react';
import mobileLogo from "../../../Asset/mobileFooter.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footerContainer container'>
            <div className=''>
                <img src={mobileLogo} alt="" />
                <p>SocialReachPro has a strong sense of community built into it. You can share graphics and templates with your team members to help get off the ground running, or to inspire each other with new ideas.</p>
            </div>
            <div>
                <p>About Us</p>
                <li className='my-5'>Getting Started</li>

                <div >
                    <ul> Facebook</ul>

                    <li className='footerLink'>Facebook Overview</li>
                    <li className='footerLink'>Connecting Groups to Facebook</li>
                    <li className='footerLink'>Classic Facebook Business Page Connection</li>
                    <li className='footerLink'>Connecting Groups to Facebook</li>
                    <li className='footerLink'>Templates</li>
                    <li className='footerLink'>Sharing a Facebook Album</li>
                    <li className='footerLink'>Text Replacements</li>
                </div>


                <div>
                    <ul>Instagram</ul>
                    <li className='footerLink'> Setting up Instagram</li>
                    <li className='footerLink'>Converting your Instagram to a Business Account</li>
                    <li className='footerLink'> How often Should I post on Instagram</li>
                </div>
                <p>Templates</p>
                <div>
                    <li className='footerLink'>Using Templates</li>
                    <li className='footerLink'>Template Sharing Codes</li>
                </div>
                <p>What’s New</p>
                <p>FAQ </p>
                <li className='mt-5'>Contact Us</li>
            </div>
            <div className=''>
                <div>
                    <ul>Legal Information</ul>
                    <li >Privacy Policy</li>
                </div>
                <p className='mt-10'>Terms of Service</p>
            </div>
        </div>
    );
};

export default Footer;