import React, { useEffect } from 'react'
import CryptoContainer from '../../components/CryptoList/CryptoContainer';
import Hero from '../../components/Hero/Hero'
import TradeCardsContainer from '../../components/TradeCardsContainer/TradeCardsContainer';
import useCryptoData from '../../hooks/useCryptoData';
import "./Home.styles.css"
const Home = () => {
    const { data, loading, error } = useCryptoData();
    const [cryptoList, setCryptoList] = React.useState([])
    useEffect(() => {
        setCryptoList(data)
    }, [data])

    return (
        <>
            <main>
                {/* <div className='container'> */}
                <Hero />
                <CryptoContainer data={cryptoList} loading={loading} error={error} />
                <p className='trade-section-heading'>
                    Why <strong>Trade</strong> with XM?
                </p>
                <div className='line--green'></div>
                <article className='trade-section-article'>
                    We have been providing traders around the world with the same <strong className='trade-section-article--strong'>premium experience </strong> for over a decade. As an <strong className='trade-section-article--strong' >industry-leader</strong>, we know what the modern trader needs to be <strong className='trade-section-article--strong'>successful</strong> in the markets.
                </article>
                <TradeCardsContainer />

                {/* </div> */}
            </main>
        </>
    )
}

export default Home