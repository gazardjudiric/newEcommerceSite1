import React from 'react';
import Voiture from '../Assets/Images/icons/voiture.svg';
import Carte from '../Assets/Images/icons/carte.svg';
import Echange from '../Assets/Images/icons/echange.svg';
import Temps from '../Assets/Images/icons/temps.svg';
import Logo2 from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import '../Assets/Css/footer.css'
import { NavLink } from 'react-router-dom';

function footer(props) {
    return (
        <div className='footer'>
            <div>
                <div>
                    <div>
                        <img src={Voiture} alt="Fast Delevery Logo" />
                        <p>Fast & Free Delivery</p>
                        <span>Free delivery on all orders</span>
                    </div>
                    <div>
                        <img src={Carte} alt="Secure Payment Logo" />
                        <p>Secure Payment</p>
                        <span>Free delivery on all orders</span>
                    </div>
                    <div>
                        <img src={Echange} alt="Money Back Guarantee Logo" />
                        <p>Money Back Guarantee</p>
                        <span>Free delivery on all orders</span>
                    </div>
                    <div>
                        <img src={Temps} alt="Online SupportLogo" />
                        <p>Online support</p>
                        <span>Free delivery on all orders</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <img src={Logo2} alt="Logo2" />
                        <span>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</span>
                        <div>
                            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faAppleAlt}/></a>

                            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faAppleAlt}/></a>

                            <a href="http://www.pinterest.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faAppleAlt}/></a>
                        </div>
                    </div>
                    <div className='liens'>
                        <h4>Quick links</h4>
                        <ul>
                            <NavLink to="/" className='lienNav'><li>Image Licensin</li></NavLink>
                            <NavLink to="/" className='lienNav'><li>Style Guide</li></NavLink>
                            <NavLink to="/" className='lienNav'><li>Privacy Policy</li></NavLink>
                        </ul>
                    </div>
                    <div className='liens'>
                        <h4>Shop Category</h4>
                        <ul>
                            <NavLink to="/" className='lienNav'><li>Image Licensin</li></NavLink>
                            <NavLink to="/" className='lienNav'><li>Style Guide</li></NavLink>
                            <NavLink to="/" className='lienNav'><li>Privacy Policy</li></NavLink>

                        </ul>
                    </div>
                    <div className='liens'>
                        <h4>Pertners</h4>
                        <ul>
                            <NavLink to="/" className='lienNav'><li>Image Licensin</li></NavLink>
                            <NavLink to="/" className='lienNav'><li>Style Guide</li></NavLink>
                            <NavLink to="/" className='lienNav'><li>Privacy Policy</li></NavLink>

                        </ul>
                    </div>
                </div>
                <p>Copyright ©2022 All rights reserved | This template is made by Judiric</p>
            </div>
        </div>
    );
}

export default footer;