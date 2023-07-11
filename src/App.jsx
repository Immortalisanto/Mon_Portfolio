import Header from './sections/Header/Header'
import Footer from './sections/Footer/Footer'
import React from 'react'
import Banner from './sections/Banner/Banner'
import APropos from './sections/APropos/APropos'
import Services from './sections/Services/Services'
import Citations from './sections/Citations/Citations'

function App() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Banner />
                <APropos />
                <Citations />
                <Services />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default App
