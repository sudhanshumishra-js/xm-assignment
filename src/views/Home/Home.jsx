import React, { useEffect } from 'react'
import CryptoContainer from '../../components/CryptoList/CryptoContainer';
import Hero from '../../components/Hero/Hero'
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
                <div className='container'>
                    <Hero />
                    <CryptoContainer data={cryptoList} loading={loading} error={error} />
                </div>
            </main>
        </>
    )
}

export default Home