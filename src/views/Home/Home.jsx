import React from 'react'
import Hero from '../../components/Hero/Hero'
import "./Home.styles.css"
const home = () => {
    return (
        <>
            <main>
                <div className='container'>
                    <Hero />
                </div>
            </main>
        </>
    )
}

export default home