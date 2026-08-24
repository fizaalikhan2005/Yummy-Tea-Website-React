import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Home(){
    return(
        <>
        {/* ======================================================= */}
        {/* HERO SECTION                                            */}
        {/* ======================================================= */}
        <section id="hero">
        <div className="hero-title-wrapper">
            
            {/* -- Background Decorative Text (YUMMY TEA) -- */}
            <div className="hero-bg-text" aria-hidden="true">
                <h1 id="yummy">YU<span>M</span>MY</h1>
                <h1 id="tea">T<span>E</span>A</h1>
            </div>
            
            {/* -- Left Side: Main Headline and Call to Action -- */}
            <div className="hero-left">
                <h2>Your new reason to get together with <span>friends!</span></h2>
                <p>Premium tea, explosive toppings, and an atmosphere where you want to hang out with friends all day.</p>
                <Link to="#menu"><button className="btn">View Menu</button></Link>
            </div>

            {/* -- Right Side: Hero Image -- */}
            <div className="hero-right">
                <img id="boba" src="img/bobatea.svg" alt="Yummy Boba Tea" />
            </div>
            
        </div>
        </section>

        {/* ======================================================= */}
        {/* ABOUT US SECTION                                        */}
        {/* ======================================================= */}
    <section id="about-us">
        {/* Section Intro text */}
        <div id="intro">
            <h2><span id="text">YU<span>M</span>MY T<span>E</span>A</span> — IS NOT JUST A BUBBLE TEA BAR — IT'S A CENTER OF ATTRACTION</h2>
            <p>We believe that a drink is more than just taste.</p>
            <button>This is a mood, a vibe, an atmosphere</button>
        </div>

        <h3>Here is what you will find:</h3>
        
        {/* Grid of 4 features/benefits cards */}
        <div id="cards">
            <div className="card">
                <p>Premium tea base — no powders, only real brewed leaves.</p>
                <img src="img/pink flower.svg" alt="pink flower"/>
            </div>
            <div className="card">
                <p>Playful toppings and classic tapioca that bursts with flavor.</p>
                <img src="img/green flower.svg" alt="green flower"/>
            </div>
            <div className="card">
                <p>An interior where you want to stick around — bright, stylish, with cozy corners for chatting and relaxing.</p>
                <img src="img/pink flower.svg" alt="pink flower"/>
            </div>
            <div className="card">
                <p>Service without the rush, as if you are hanging out with friends.</p>
                <img src="img/green flower.svg" alt="green flower"/>
            </div>
        </div>

        {/* Section Outro text */}
        <div id="outro">
            <p>We created a place you want to return to — after classes, before the movies, or just because.</p>
            <Link to="#location"><button className="btn">Let's meet at Yummy?</button></Link>
        </div>
    </section>


    {/* ======================================================= */}
    {/* WHY US SECTION                                          */}
    {/* ======================================================= */}
    <section id="why-us">
        <h2>WHY <span>Yummy TEA?</span></h2>
        
        {/* 3-Column Grid Layout: Cards Left -> Image Center -> Cards Right */}
        <div id="grid-container">
            
            {/* Left Side Cards */}
            <div id="left-side">
                <div className="card">
                    <span>1</span>
                    <img src="img/pink flower.svg" alt="pink flower"/>
                    <h3>A taste you want to repeat</h3>
                    <p>Premium tea with toppings that melt in your mouth.</p>
                </div>
                <div className="card">
                    <span>4</span>
                    <img src="img/pink flower.svg" alt="pink flower"/>
                    <h3>Atmosphere for those who love to hang out</h3>
                    <p>Bright interior, cozy areas, great vibe — the perfect place for chatting and relaxing</p>
                </div>
            </div>

            {/* Center Image */}
            <div id="center">
                <img id="bobaa" src="img/bobatea.svg" alt="Boba Tea"/>
            </div>

            {/* Right Side Cards */}
            <div id="right-side">
                <div className="card">
                    <span>2</span>
                    <img src="img/pink flower.svg" alt="pink flower"/>
                    <h3>Fast service</h3>
                    <p>Quick and easy ordering — enjoy your tea sooner!</p>
                </div>
                <div className="card">
                    <span>3</span>
                    <img src="img/pink flower.svg" alt="pink flower"/>
                    <h3>Diverse menu</h3>
                    <p>Rare flavor combinations. Taste something new every time!</p>
                </div>
            </div>
            
        </div>
    </section>


    {/* ======================================================= */}
    {/* MAIN MENU SECTION                                       */}
    {/* ======================================================= */}
    <section id="menu">
        <div>
            <h2>MAIN <span>MENU</span></h2>
        </div>
        
        {/* Product Grid containing all drinks */}
        <div className="menu-grid">
            <ProductCard 
                name="ICE MATCHA CREAM" 
                image="img/ice matcha.svg" 
                price="5.50" 
                desc="A refreshing blend of premium matcha green tea, creamy milk, and our signature bouncy tapioca pearls. Perfectly sweet and earthy!"
            />
            
            <ProductCard 
                name="ICE TARO" 
                image="img/ice taro.svg" 
                price="6.50" 
                desc="Sweet, rich, and beautifully purple! Our Ice Taro is a creamy delight made with real taro root and fresh milk."
            />

            <ProductCard 
                name="ICE COFFEE" 
                image="img/ice coffee.svg" 
                price="7.50"
                desc="Need a boost? A smooth, chilled coffee mixed with our secret sweet cream formula and chewy boba."
            />

            <ProductCard 
                name="ICE MANGO CREAM" 
                image="img/ice mango.svg" 
                price="5.50"
                desc="Tropical vibes in a cup! Sweet mango puree mixed with rich cheese foam and fresh tea base."
            />
            
        </div>
    </section>


    {/* ======================================================= */}
    {/* PREPARATION PROCESS SECTION                             */}
    {/* ======================================================= */}
    <section id="Pre-process">
        <h2>WHAT GOES INTO YOUR <span>YUMMY?</span></h2>
        
        {/* Pink banner container holding absolute positioned steps */}
        <div id="pink-container">
            <img src="img/green flower.svg" className="border-flower flower-left" alt="decor flower"/>
            <img src="img/green flower.svg" className="border-flower flower-right" alt="decor flower"/>
            
            <img src="img/sec 4 banner.svg" className="banner-img" alt="Process Banner"/>

            <div className="step-item step-1">
                <h3>TEA</h3>
                <p>Base with rich flavor and aroma</p>
            </div>
            <div className="step-item step-2">
                <h3>TAPIOCA</h3>
                <p>Warm chewy balls for the mood</p>
            </div>
            <div className="step-item step-3">
                <h3>FRUITS</h3>
                <p>Juicy pieces of freshness in every sip</p>
            </div>
            <div className="step-item step-4">
                <h3>CHEESE FOAM</h3>
                <p>Tender, sweet and salty cap</p>
            </div>
            <div className="step-item step-5">
                <h3>TOPPINGS</h3>
                <p>The final touch from caramel to puree</p>
            </div>
        </div>
    </section>


    {/* ======================================================= */}
    {/* REVIEWS SECTION                                         */}
    {/* ======================================================= */}
    <section id="review">
        <h2>WHAT DO THEY SAY <span> ABOUT US?</span></h2>

        {/* Horizontal scrollable review cards */}
        <div className="review-cards">
            <div className="re-card">
                <img src="img/pink flower.svg" alt="pink flower"/>
                <h4>POLINA NALIVAYKO</h4>
                <p>Visited this place for the first time, very beautiful, aesthetic and incredibly delicious! The cup design is impressive.</p>
            </div>
            <div className="re-card">
                <img src="img/pink flower.svg" alt="pink flower"/>
                <h4>SVETLANA NOZDRACHEVA</h4>
                <p>At Yummy Tea I managed to find one of the most delicious options. There is a huge selection of drinks here — from classic milk tea with tapioca to unusual fruit combinations.</p>
            </div>
            <div className="re-card">
                <img src="img/pink flower.svg" alt="pink flower"/>
                <h4>YULIA KARPOVA</h4>
                <p>Very good place, friendly staff, will prompt you if you don't know what to choose Highly recommend! All drinks are delicious, often drop by with a friend.</p>
            </div>
        </div>
    </section>


    {/* ======================================================= */}
    {/* LOCATION SECTION                                        */}
    {/* ======================================================= */}
    <section id="location">
        <h2>WHERE TO <span>FIND US?</span></h2>
        
        <div id="loc-container">
            {/* Left text block with addresses */}
            <div>
                <h3>FIND YOUR CORNER WITH BUBBLES!</h3>
                <ul>
                    <li>
                        <b>Sretenka, 28, bldg. 2</b><br/>
                        hidden right in the cozy courtyard near "Sukharevskaya"
                    </li>
                    <li>
                        <b>Bolshaya Nikitskaya, 23</b><br/>
                        right in the center, between a walk and a party
                    </li>
                    <li>
                        <b>Baumanskaya, 15, bldg. 1</b><br/>
                        right next to the student drive and creative clusters
                    </li>
                </ul>
                <p><b>WORKING HOURS: </b>daily from 10:00 to 22:00</p>
            </div>
            
            {/* Right block embedded map */}
            <iframe src="https://maps.google.com/maps?q=Bolshaya%20Nikitskaya%2C%2023&t=m&z=14&ie=UTF8&iwloc=&output=embed"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map Location"></iframe>
        </div>
    </section>
        </>
    );
}