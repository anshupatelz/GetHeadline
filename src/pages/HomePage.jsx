import { useState } from 'react'
import './styles/HomePage.css'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

function HomePage(analysisData, setAnalysisData) {
    return (
        <div className="HomePage">
            <NavBar />
            <HeroSection
                analysisData={analysisData}
                setAnalysisData={setAnalysisData}
            />
            <Footer />
        </div >
    )
}

export default HomePage;
