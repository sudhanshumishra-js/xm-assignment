import React from 'react';
import CryptoCard from './CryptoCard';
import "./CryptoList.styles.css";

const CryptoContainer = (props) => {
    const { data, loading, error } = props;

    if (loading) {
        return (
            <section className='crypto__container'>
                {[...Array(5)].map((_, index) => (
                    <div className="crypto__card crypto__card--loading" key={index}></div>
                ))}
            </section>
        );
    }

    if (error) {
        return (
            <section className='crypto__container'>
                <CryptoCard key="error" name="--" symbol="--" price="--" percentChange="--" />
            </section>
        );
    }

    return (
        <section className='crypto__container'>
            {data?.map((item, index) => (
                <CryptoCard key={index} name={item.name} symbol={item.symbol} price={item.price_usd} percentChange={item.percent_change_1h} />
            ))}
        </section>
    );
}

export default CryptoContainer;
