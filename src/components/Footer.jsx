import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <footer id="footer">
        <div className="upper-box">
            
            {/* Left Section: Logo & Contact Info */}
            <div className="footer-info">
                <img className="logo" src="img/Logo.svg" alt="Yummy Tea Logo"/>
                <div className="footer-text-stack">
                    <p>info@yummytea.ru</p>
                    <p>+7(495)00-00-871</p>
                    <p className="social-handle">@fizaalikhan2005</p>
                </div>
            </div>

            {/* Right Section: Navigation & Promo Banner */}
            <div className="footer-nav-promo">
                <nav>
                    <ul>
                        <li><a href="#about-us">About Us</a ></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><a href="#Pre-process">Preparation Process</a ></li>
                        <li><a href="#review">Reviews</a ></li>
                        <li><a href="#location">Location</a ></li>
                        <li><a href="#footer">Contact</a ></li>
                    </ul>
                </nav>

                {/* Supplier Partnership Promo Box */}
                <div className="promo-card">
                    <h3>WANT TO BECOME A SUPPLIER OR PARTNER?</h3>
                    <p>We are open to cooperation!</p>
                    <button type="button">Find out more</button>
                </div>
            </div>
            
        </div>

        {/* Bottom Section: Copyright */}
        <div className="lower-box">
            <p>©yummytea 2025 | All rights reserved (Website by Fiza Ali Khan)</p>
        </div>
    </footer>
    );
}