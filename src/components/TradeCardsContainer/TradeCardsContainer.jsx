import React from 'react'
import "./TradeCards.styles.css"
import img1 from "../../Assets/Icons/fast-execusion-icon.svg"
import img2 from "../../Assets/Icons/competitive-pricing-icon.svg"
import img3 from "../../Assets/Icons/tech-icon.svg"
import img4 from "../../Assets/Icons/dollar-icon.svg"

const TradeCardsContainer = () => {
    return (
        <section className='trade__section-container'>
            <div className="trade__section-cards--primary">
                <div className='trade__section__cards--primary-container'>
                    <img src={img1} alt="fast-execution-img" className='trade-cards-icon' />
                    <div className='trade__section__cards--primary__top-text'>
                        Superior Trade Execution
                    </div>
                    <div className='card-line-green'></div>
                    <div className='trade__section__cards--primary__bottom-text'>
                        <strong className='strong-text'>99%</strong> of trades are executed in <strong className='strong-text'>less than a second</strong> with no requotes or rejections.
                    </div>
                </div>
            </div>
            <div className="trade__section-cards--secondary">
                <div className='trade__section__cards--secondary-container'>
                    <img src={img2} alt="competitive_pricing_img" className='trade-cards-icon' />
                    <div className='trade__section__cards--secondary__top-text'>
                        Competitive Pricing
                    </div>
                    <div className='card-line-green'></div>
                    <div className='trade__section__cards--secondary__bottom-text'>
                        We offer some of the <strong className='strong-text'></strong> lowest spreads and we don’t charge commissions.
                    </div>
                </div>
            </div>
            <div className="trade__section-cards--secondary">
                <div className='trade__section__cards--secondary-container'>
                    <img src={img3} alt="Advanced_technology_icon_image" className='trade-cards-icon' />
                    <div className='trade__section__cards--secondary__top-text'>
                        Advanced Technology
                    </div>
                    <div className='card-line-green'></div>
                    <div className='trade__section__cards--secondary__bottom-text'>
                        Trade on <strong className='strong-text'>MT4</strong> or <strong className='strong-text'>MT5</strong>, with expert tools, across desktop, web and mobile.
                    </div>
                </div>
            </div>
            <div className="trade__section-cards--secondary">
                <div className='trade__section__cards--secondary-container'>
                    <img src={img4} alt="minimum_deposit_icon_img" className='trade-cards-icon' />
                    <div className='trade__section__cards--secondary__top-text'>
                        Start with $5
                    </div>
                    <div className='card-line-green'></div>
                    <div className='trade__section__cards--secondary__bottom-text'>
                        Start trading your preferred instruments with as little as a <strong className='strong-text'>$5 minimum deposit.</strong>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TradeCardsContainer