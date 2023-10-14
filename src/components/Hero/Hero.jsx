import React from 'react';
import './Hero.style.css'; // Assuming your CSS is in Hero.css

const Hero = () => (
    <div className='hero__wrapper'>
        <section className="hero">
            <p className='hero__trade-with-text'>Trade With</p>
            <p className="hero__trade-text">
                <strong className="hero__trade-text--strong">Zero Swaps</strong> on All XM Ultra Low Accounts for more than 25 instruments!
            </p>
            <p className="hero__main-text">
                Enjoy spreads <strong className="hero__main-text--strong">as low as 0.6 pips</strong> and <strong className="hero__main-text--strong">leverage up to 1000:1</strong> on instruments like <strong className="hero__main-text--strong">EURUSD</strong>, <strong className="hero__main-text--strong">USDJPY</strong>, <strong className="hero__main-text--strong">EURJPY</strong>, <strong className="hero__main-text--strong">GBPUSD</strong>, and <strong className="hero__main-text--strong">Gold</strong>.
            </p>
            <button className="hero__button">Open Account</button>
            <p className="hero__demo-text">New to trading? Try a <span className='hero__demo-text-underline'>Demo account</span> </p>
            <p className="hero__terms-text">
                Terms and Conditions apply*. To read the full T&Cs, <span className="hero__clickable-text">click here</span>.
            </p>
        </section>
    </div>
);

export default Hero;
