import './footer.css';
import footerLogo from '../assets/logo-transparent.webp';
import mergedImage from '../assets/world_image.png';

import {FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'


export default function(){
    return(
        <div className='footer-div'>
            <div className='footer-wrapper'>
                <div className='footer-content-div'>

                    <div className='footer-left'>
                        <div className='footer-image-div'>
                            <img src={footerLogo} className="footer-image"></img>
                        </div>
                        <div className='footer-merged-image-div'>
                            <div className='inside-merged'>
                                <div className='merged-text'>Discover a &emsp;&emsp; world &emsp;&emsp;of opportunities</div>
                                <img src={mergedImage} className="merged-image"></img>
                            </div>
                        </div>
                        <div className='socials'>
                            <a href='https://www.facebook.com/enterpriseleague/' className='social-a'><FaFacebookSquare className='social' ></FaFacebookSquare></a>
                            <a href='https://www.instagram.com/enterpriseleague/' className='social-a'><FaInstagram className='social'></FaInstagram></a>
                            <a href='https://twitter.com/enterpriseleag1/' className='social-a'><FaTwitter className='social'></FaTwitter></a>
                            <a href='https://www.linkedin.com/company/enterpriseleague/' className='social-a'><FaLinkedin className='social'></FaLinkedin></a>
                        </div>
                    </div>
                    
                    <div className='footer-right'>
                        <div className='footer-right-wrapper'>
                        <div className='footer-company-column'>
                                <div className='footer-company-title'>COMPANY</div>
                                <div className='company-item'>About</div>
                                <div className='company-item'>Team</div>
                                <div className='company-item'>Write for us</div>
                                <div className='company-item'>Advertise</div>
                                <div className='company-item'>Newsroom</div>
                                <div className='company-item'>Careers</div>
                                <div className='company-item'>Contact Us</div>
                            </div>

                            <div className='footer-product-column'>
                                <div className='footer-product-title'>PRODUCT</div>
                                <div className='product-item'>Platform</div>
                                <div className='product-item'>Dealzone</div>
                                <div className='product-item'>Directory</div>
                                <div className='product-item'>Pricing</div>
                                <div className='product-item'>All categories</div>
                                <div className='product-item'>Soltions</div>
                                <div className='product-item'>Get listed</div>

                                <div className='footer-resources-column-two'>
                                    <div className='footer-resources-title-two'>RESOURCES</div>
                                    <div className='resources-item-two'>Blog</div>
                                    <div className='resources-item-two'>Suport</div>
                                    <div className='resources-item-two'>Privacy Policy</div>
                                </div>
                            </div>

                            <div className='footer-resources-column'>
                                <div className='footer-resources-title'>RESOURCES</div>
                                <div className='resources-item'>Blog</div>
                                <div className='resources-item'>Suport</div>
                                <div className='resources-item'>Privacy Policy</div>
                            </div>
                        </div>
                    </div>




                </div>
                <div className='copyright-div'>
                © Copyright 2022 Enterprise League. All right reserved.
                </div>
            </div>
        </div>
    );
}