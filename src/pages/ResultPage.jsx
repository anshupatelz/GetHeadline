
import { useLocation } from 'react-router-dom';

import './styles/ResultPage.css';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeadlineInputForm from '../components/HeadlineInputForm';

function ResultPage({ analysisData, setAnalysisData }) {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const headline = params.get('headline');

    return (
        <div className='ResultPage' >
            <NavBar />
            <div className='page-content'>

                <HeadlineInputForm
                    buttonText={'Re-analyze'}
                    isPreventDefault={true}
                    analysisData={analysisData}
                    setAnalysisData={setAnalysisData}
                />

                <section className='score-section'>
                    <div id='score'
                        style={{ background: `conic-gradient(${Math.floor(analysisData.score) > 50 ? 'green' : 'red'} ${Math.floor(analysisData.score) * 3.6}deg, var(--bg-color-2) 0deg)` }}
                    >
                        <span id='score-value'>{Math.floor(analysisData.score)}</span>
                    </div>
                    <div id='google-priview'>
                        <div id='website'>
                            <div id='favicon'>F</div>
                            <div>
                                <div id='website-name'>Aimpur</div>
                                <div id='page-url'>https://aimpur.com/how-to-make-money-online-in-2024</div>
                            </div>
                        </div>
                        <div id='title'>{analysisData.headline}</div>
                        <div id='description'>Top 26 Ways to Make Money Online · 1. Create an eCommerce Site · 2. Write and Monetize Blog Posts · 3. Find Freelance Work · 4. Develop Websites for a Living.</div>
                    </div>
                </section>
            </div>
            <Footer />
        </div >
    );
}

export default ResultPage;