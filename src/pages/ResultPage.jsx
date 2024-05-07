
import { useLocation } from 'react-router-dom';

import './styles/ResultPage.css';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeadlineInputForm from '../components/HeadlineInputForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faStar, faCheck, faGrinHearts } from '@fortawesome/free-solid-svg-icons'

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
                        style={{
                            background: `conic-gradient(${Math.floor(analysisData.score) > 70 ? 'var(--green)' :
                                (Math.floor(analysisData.score) > 50 ? 'var(--yellow)' : 'var(--red)')} 
                                    ${Math.floor(analysisData.score) * 3.6}deg, 
                                ${Math.floor(analysisData.score) > 70 ? 'var(--green-light)' :
                                    (Math.floor(analysisData.score) > 50 ? 'var(--yellow-light)' : 'var(--red-light)')} 0deg)`
                        }}
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

                <section className='analysis-section'>
                    <div className="word-count"
                        style={{
                            backgroundColor: `${analysisData.structural_analysis.word_count <= 7 || analysisData.structural_analysis.word_count >= 14 ? `var(--red-light)` :
                                ((analysisData.structural_analysis.word_count >= 9 && analysisData.structural_analysis.word_count <= 12) ? `var(--green-light)` : `var(--yellow-light)`)}`
                        }}>
                        <div className='heading-box'><h3 style={{
                            backgroundColor: `${analysisData.structural_analysis.word_count <= 7 || analysisData.structural_analysis.word_count >= 14 ? `var(--red)` :
                                ((analysisData.structural_analysis.word_count >= 9 && analysisData.structural_analysis.word_count <= 12) ? `var(--green)` : `var(--yellow)`)}`
                        }}>Word Count</h3></div>
                        <div className='d-flex'>
                            <div className='number'>{analysisData.structural_analysis.word_count}</div>
                            <p>Your headline contains the right number of words. Headlines with around 12 words tend to earn the highest number of click-throughs.
                            </p>
                        </div>
                        <div className='range word-range'>
                            <div id='mask'>
                                <div id='pointer' style={{
                                    left: `${analysisData.structural_analysis.word_count <= 6 ? 2 :
                                        (analysisData.structural_analysis.word_count >= 15 ? 98 :
                                            (analysisData.structural_analysis.word_count - 6) * 11.11)}%`,
                                    borderTopColor: `${analysisData.structural_analysis.word_count <= 7 || analysisData.structural_analysis.word_count >= 14 ? `var(--red)` :
                                        ((analysisData.structural_analysis.word_count >= 9 && analysisData.structural_analysis.word_count <= 12) ? `var(--green)` : `var(--yellow)`)}`
                                }}>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="character-count"
                        style={{
                            backgroundColor: `${analysisData.structural_analysis.character_count <= 37 || analysisData.structural_analysis.character_count >= 83 ? `var(--red-light)` :
                                ((analysisData.structural_analysis.character_count >= 50 && analysisData.structural_analysis.character_count <= 70) ? `var(--green-light)` : `var(--yellow-light)`)}`
                        }}>
                        <div className='heading-box'><h3 style={{
                            backgroundColor: `${analysisData.structural_analysis.character_count <= 37 || analysisData.structural_analysis.character_count >= 83 ? `var(--red)` :
                                ((analysisData.structural_analysis.character_count >= 50 && analysisData.structural_analysis.character_count <= 70) ? `var(--green)` : `var(--yellow)`)}`
                        }}
                        >Character Count</h3></div>
                        <div className='d-flex'>
                            <div className='number'>{analysisData.structural_analysis.character_count}</div>
                            <p>Your headline contains the right number of characters. Headlines with around 60 characters tend to earn the highest number of click-throughs.
                            </p>
                        </div>
                        <div className='range character-range'>
                            <div id='mask'>
                                <div id='pointer' style={{
                                    left: `${analysisData.structural_analysis.character_count <= 30 ? 2 :
                                        (analysisData.structural_analysis.character_count >= 90 ? 98 :
                                            (analysisData.structural_analysis.character_count - 30) * 1.66)}%`,
                                    borderTopColor: `${analysisData.structural_analysis.character_count <= 37 || analysisData.structural_analysis.character_count >= 83 ? `var(--red)` :
                                        ((analysisData.structural_analysis.character_count >= 50 && analysisData.structural_analysis.character_count <= 70) ? `var(--green)` : `var(--yellow)`)}`
                                }}>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reading-grade-level"
                        style={{
                            backgroundColor: `${analysisData.readability_analysis.flesch_kincaid_grade > 12 ? `var(--red-light)` :
                                ((analysisData.readability_analysis.flesch_kincaid_grade <= 7) ? `var(--green-light)` : `var(--yellow-light)`)}`
                        }}
                    >
                        <div className='heading-box'><h3 style={{
                            backgroundColor: `${analysisData.readability_analysis.flesch_kincaid_grade > 12 ? `var(--red)` :
                                ((analysisData.readability_analysis.flesch_kincaid_grade <= 7) ? `var(--green)` : `var(--yellow)`)}`
                        }}
                        >Reading Grade Level</h3></div>

                        <div className='grade-chart-section'>
                            <div className='grade-chart' style={{
                                background: `conic-gradient(${analysisData.readability_analysis.flesch_kincaid_grade > 12 ? `var(--red)` :
                                    ((analysisData.readability_analysis.flesch_kincaid_grade <= 7) ? `var(--green)` : `var(--yellow)`)} 
                                    ${analysisData.readability_analysis.flesch_kincaid_grade * 15}deg, 
                                    ${analysisData.readability_analysis.flesch_kincaid_grade > 12 ? `var(--red-light)` :
                                        ((analysisData.readability_analysis.flesch_kincaid_grade <= 7) ? `var(--green-light)` : `var(--yellow-light)`)} 0deg)`
                            }}></div>
                            <div className="value">{Math.round(analysisData.readability_analysis.flesch_kincaid_grade)}</div>
                        </div>
                        <p>Your headline reads at or below a 7th grade reading level, making it easy for most readers to comprehend.</p>
                    </div>

                    <div className="sentiment"
                        style={{
                            backgroundColor: `${analysisData.sentiment_analysis.score < 0 ? `var(--red-light)` :
                                ((analysisData.sentiment_analysis.score > 0) ? `var(--green-light)` : `var(--yellow-light)`)}`
                        }}
                    >
                        <div className='heading-box'><h3 style={{
                            backgroundColor: `${analysisData.sentiment_analysis.score < 0 ? `var(--red)` :
                                ((analysisData.sentiment_analysis.score > 0) ? `var(--green)` : `var(--yellow)`)}`
                        }}>Sentiment</h3></div>
                        <div className="value">{analysisData.sentiment_analysis.score < 0 ? 'Negative' : ((analysisData.sentiment_analysis.score > 0) ? 'Positive' : `Natural`)}</div>
                        <p>Your headline conveys a neutral sentiment. Add more emotionally positive or negative words to help it stand out and drive more engagement.
                        </p>
                    </div>

                    <div className="headline-type" style={{
                        backgroundColor: `${analysisData.structural_analysis.headline_type == 'General' ? `var(--yellow-light)` : `var(--green-light)`}`
                    }}
                    >
                        <div className='heading-box'><h3 style={{
                            backgroundColor: `${analysisData.structural_analysis.headline_type == 'General' ? `var(--yellow)` : `var(--green)`}`
                        }}
                        >Headline Type</h3></div>
                        <div className="value">{analysisData.structural_analysis.headline_type.map((headlineType) => headlineType)}</div>
                        <p>You wrote a Step-By-Step headline. Your headline compels readers to click by promising to teach them how to do something in a limited number of steps.
                        </p>
                    </div>
                </section>

                <section className='word-balance-section'>
                    <div className='all-words'>{
                        analysisData.tokens.map((token, i) => {
                            return <div className='word' key={i}>{token}</div>
                        })
                    }
                    </div>

                    <div className="emotional-words" style={{ backgroundColor: `#f37e5d3a` }}>
                        <div className='heading-box'><h3 style={{ backgroundColor: `#f37e5d` }}>Emotional Words</h3></div>
                        <div className='meter-box'>
                            <div className='meter' style={{
                                background: `linear-gradient(90deg, #ffffff 20%, #f37e5d 40%, #f37e5d 60%, #ffffff 80%)`
                            }}
                            >
                                <div className='pointer' style={{
                                    left: `${analysisData.semantic_analysis.word_balance.emotional_words.length / analysisData.tokens.length * 100}%`,
                                    backgroundColor: `#f37e5d`
                                }}>
                                    <FontAwesomeIcon icon={faGrinHearts} />
                                </div>
                            </div>
                            <div>{
                                Math.round(analysisData.semantic_analysis.word_balance.emotional_words.length / analysisData.tokens.length * 100) + "%"
                            }</div>
                        </div>
                        <div className='words'>
                            {
                                analysisData.semantic_analysis.word_balance.emotional_words.map((token, i) => {
                                    return <div className='word' key={i}
                                        style={{ color: `#f37e5d`, borderColor: `#f37e5d` }}
                                    >{token}</div>
                                })
                            }
                        </div>
                        <p>Your headline contains the right number of words. Headlines with around 12 words tend to earn the highest number of click-throughs.
                        </p>
                    </div>

                    <div className="power-words" style={{ backgroundColor: `#8179bf3a` }}>
                        <div className='heading-box'><h3 style={{ backgroundColor: `#8179bf` }}>Power Words</h3></div>
                        <div className='meter-box'>
                            <div className='meter' style={{ background: `linear-gradient(90deg, #ffffff 20%, #8179bf 40%, #8179bf 60%, #ffffff 80%)` }}>
                                <div className='pointer' style={{
                                    left: `${analysisData.semantic_analysis.word_balance.power_words.length / analysisData.tokens.length * 100}%`,
                                    backgroundColor: `#8179bf`
                                }}>
                                    <FontAwesomeIcon icon={faBolt} />
                                </div>
                            </div>
                            <div>{
                                Math.round(analysisData.semantic_analysis.word_balance.power_words.length / analysisData.tokens.length * 100) + "%"
                            }</div>
                        </div>
                        <div className='words'>
                            {
                                analysisData.semantic_analysis.word_balance.power_words.map((token, i) => {
                                    return <div className='word' key={i}
                                        style={{ color: `#8179bf`, borderColor: `#8179bf` }}
                                    >{token}</div>
                                })
                            }
                        </div>
                        <p>Your headline contains the right number of words. Headlines with around 12 words tend to earn the highest number of click-throughs.
                        </p>
                    </div>

                    <div className="common-words" style={{ backgroundColor: `#f1cf533a` }}>
                        <div className='heading-box'><h3 style={{ backgroundColor: `#f1cf53` }}>Common Words</h3></div>
                        <div className='meter-box'>
                            <div className='meter' style={{
                                background: `linear-gradient(90deg, #ffffff 20%, #f1cf53  40%, #f1cf53  60%, #ffffff 80%)`
                            }}>
                                <div className='pointer' style={{
                                    left: `${analysisData.semantic_analysis.word_balance.common_words.length / analysisData.tokens.length * 100}%`,
                                    backgroundColor: `#f1cf53`
                                }}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            </div>
                            <div>{
                                Math.round(analysisData.semantic_analysis.word_balance.common_words.length / analysisData.tokens.length * 100) + "%"
                            }</div>
                        </div>
                        <div className='words'>
                            {
                                analysisData.semantic_analysis.word_balance.common_words.map((token, i) => {
                                    return <div className='word' key={i}
                                        style={{ color: `#f1cf53`, borderColor: `#f1cf53` }}
                                    >{token}</div>
                                })
                            }
                        </div>
                        <p>Your headline contains the right number of words. Headlines with around 12 words tend to earn the highest number of click-throughs.
                        </p>
                    </div>

                    <div className="uncommon-words" style={{ backgroundColor: `#5ac3db3a` }}>
                        <div className='heading-box'><h3 style={{ backgroundColor: `#5ac3db` }}>Uncommon Words</h3></div>
                        <div className='meter-box'>
                            <div className='meter' style={{
                                background: `linear-gradient(90deg, #ffffff 20%, #5ac3db 40%, #5ac3db 60%, #ffffff 80%)`
                            }}>
                                <div className='pointer' style={{
                                    left: `${analysisData.semantic_analysis.word_balance.uncommon_words.length / analysisData.tokens.length * 100}%`,
                                    backgroundColor: `#5ac3db`
                                }}>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <div>{
                                Math.round(analysisData.semantic_analysis.word_balance.uncommon_words.length / analysisData.tokens.length * 100) + "%"
                            }</div>
                        </div>
                        <div className='words'>
                            {
                                analysisData.semantic_analysis.word_balance.uncommon_words.map((token, i) => {
                                    return <div className='word' key={i}
                                        style={{ color: `#5ac3db`, borderColor: `#5ac3db` }}
                                    >{token}</div>
                                })
                            }
                        </div>
                        <p>Your headline contains the right number of words. Headlines with around 12 words tend to earn the highest number of click-throughs.
                        </p>
                    </div>
                </section>

            </div>
            <Footer />
        </div >
    );
}

export default ResultPage;