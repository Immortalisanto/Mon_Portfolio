import React from 'react'
import Header from './sections/Header/Header'
import Footer from './sections/Footer/Footer'
import Banner from './sections/Banner/Banner'
import APropos from './sections/APropos/APropos'
import Services from './sections/Services/Services'
import Citations from './sections/Citations/Citations'
import Realisations from './sections/Realisations/Realisations'
import Competences from './sections/Competences/Competences'
import Contact from './sections/Contact/Contact'
import BackToTopButton from '../components/BackToTopButton/BackToTopButton'

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Banner />
                <APropos />
                <Competences />
                <Realisations />
                <Citations />
                <Services />
                <Contact />
                <BackToTopButton />
            </main>
            <Footer />
        </React.Fragment>
    )
}
