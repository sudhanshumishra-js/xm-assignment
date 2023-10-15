import React from 'react';
import CryptoCard from './CryptoCard';
import "./CryptoList.styles.css";

const CryptoContainer = (props) => {
    const { data, loading, error } = props;

    if (loading) {
        return (
            <div className='crypto__container'>
                {[...Array(5)].map((_, index) => (
                    <div className="crypto__card crypto__card--loading" key={index}></div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className='crypto__container'>
                <CryptoCard key="error" name="--" symbol="--" price="--" percentChange="--" />
            </div>
        );
    }

    return (
        <div className='crypto__container'>
            {data?.map((item, index) => (
                <CryptoCard key={index} name={item.name} symbol={item.symbol} price={item.price_usd} percentChange={item.percent_change_1h} />
            ))}
        </div>
    );
}

export default CryptoContainer;
