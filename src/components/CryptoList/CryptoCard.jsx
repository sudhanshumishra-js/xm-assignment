import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./CryptoList.styles.css"
import icons from '../../utils/icons'
import React from 'react'

const CryptoCard = (props) => {
    // const imgSrc = props.symbol && require(`../../Assets/Icons/${props.symbol}.svg`).default
    const imgSrc = icons[props.symbol]
    return (
        <div className='crypto__card'>
            <div className='crypto__card__top'>
                <img src={imgSrc} alt="crypto_img" className='crypto__card__image' />
                <span className='crypto__card__top-symbol'>{props.symbol}</span>
                <span className='crypto__card__top-name'>{props.name}</span>
            </div>
            <div className='crypto__card__bottom'>
                <div className='crypto__card__bottom-price'>
                    {props.price}
                </div>
                <div className={props.percentChange >= 0 ? "crypto__card__bottom-price-change--positive" : "crypto__card__bottom-price-change--negative"}>
                    {props.percentChange >= 0 ? <FontAwesomeIcon icon={faCircleChevronUp} style={{ color: "#b1ffc2", marginRight: '0.3rem' }} /> : <FontAwesomeIcon icon={faCircleChevronDown} style={{ color: "#ffa3a6", marginRight: '0.3rem' }} />}
                    {props.percentChange} %
                </div>
            </div>
        </div>
    )
}

export default CryptoCard