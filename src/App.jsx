import Header from './sections/Header/Header'
import Footer from './sections/Footer/Footer'
import React from 'react'
import Banner from './sections/Banner/Banner'

function App() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Banner />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default App
