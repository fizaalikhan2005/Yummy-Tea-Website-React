import { Link } from 'react-router-dom';

export default function Navbar() {
    return (    
    <header id="navbar">
        <img className="logo" src="img/Logo.svg" alt="Yummy Tea Logo" />
        
        {/*-- Desktop Navigation Links */}
        <nav>
            <ul>
                <li><a href="#about-us">About Us</a></li>
                {/* React <Link> for swapping to a brand new page */}
                <li><Link to="/menu">Menu</Link></li>
                <li><a href="#Pre-process">Preparation Process</a></li>
                <li><a href="#review">Reviews</a></li>
                <li><a href="#location">Location</a></li>
                <li><a href="#footer">Contact</a></li>
                
                <li id="desktop-cart">
                    <Link to="" className="open-cart-btn" aria-label="Open Cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="cart-badge">0</span>
                    </Link>
                </li>
            </ul>
        </nav>
        
        {/*-- Mobile Actions: Cart & Hamburger Menu (Hidden on desktop) */}
        <div className="header-actions">
            <Link to="" className="open-cart-btn" id="mobile-cart" aria-label="Open Cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="cart-badge">0</span>
            </Link>
            <i className="fa-solid fa-bars" id="hamburger"></i>
        </div>
    </header>
    );
}