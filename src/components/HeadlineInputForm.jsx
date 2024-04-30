// import './styles/HeadlineInputForm.css';
// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';


// function HeadlineInputForm({ buttonText = 'Analyze Now', isPreventDefault = true, analysisData, setAnalysisData }) {

//     const location = useLocation();
//     const params = new URLSearchParams(location.search);
//     const headline = params.get('headline');

//     const [headlineValue, setHeadlineValue] = useState(headline);

//     let analyzeHeadline = async () => {
//         try {
//             return await fetch('https://headline-analyzer-api.vercel.app/?headline=' + headline)
//                 .then(response => response.json())
//                 .then(data => {
//                     // console.log(data);
//                     return data;
//                 });
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             alert('Failed to fetch analysis data.');
//         }
//     }

//     async function updataAnalysisData() {
//         const newAnalysisData = await analyzeHeadline();
//         console.log('newAnalysisData:', newAnalysisData);
//         if (newAnalysisData) {
//             setAnalysisData(newAnalysisData);
//             console.log('Updated analysisData:', newAnalysisData);
//         }
//     }
//     // updataAnalysisData();


//     async function handleFormSubmit(event) {
//         updataAnalysisData();
//         if (isPreventDefault) {
//             event.preventDefault()
//         } else {
//             // event.preventDefault();
//             window.location.href = '/result?headline=' + headlineValue;
//         };
//     }

//     return (
//         <div className='headline-input-box'>
//             <form onSubmit={handleFormSubmit} action='/result'>
//                 <input
//                     type="text"
//                     id='headline'
//                     name='headline'
//                     placeholder='5 Ways to Boost Your SEO Rankings in 2024'
//                     value={headlineValue}
//                     onChange={(e) => setHeadlineValue(e.target.value)}
//                     aria-label="Headline"
//                 />
//                 <button className='btn' onClick={updataAnalysisData}>{buttonText}</button>
//             </form>
//         </div>
//     );
// }

// export default HeadlineInputForm;

// ------------------------
import './styles/HeadlineInputForm.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function HeadlineInputForm({ buttonText = 'Analyze Now', isPreventDefault = true, analysisData, setAnalysisData }) {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const headline = params.get('headline');
    const [headlineValue, setHeadlineValue] = useState(headline || '');

    useEffect(() => {
        updateAnalysisData(headline);
    }, [headline]);

    const analyzeHeadline = async () => {
        if (headlineValue != '') {
            try {
                const encodedHeadline = encodeURIComponent(headlineValue).replace(/%20/g, '+');
                console.log('encodedHeadline:', encodedHeadline);

                const response = await fetch('https://headline-analyzer-api.vercel.app/?headline=' + encodedHeadline);
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('Failed to fetch analysis data.');
            }
        }
    };

    const updateAnalysisData = async () => {
        const newAnalysisData = await analyzeHeadline();
        console.log('newAnalysisData:', newAnalysisData);
        if (newAnalysisData) {
            setAnalysisData(newAnalysisData);
            console.log('Updated analysisData:', newAnalysisData);
        }
    };

    const handleFormSubmit = async (event) => {
        if (isPreventDefault) {
            event.preventDefault();
            const encodedHeadline = encodeURIComponent(headlineValue).replace(/%20/g, '+');
            window.location.href = '/result?headline=' + encodedHeadline;
        }
        await updateAnalysisData();
    };

    return (
        <div className='headline-input-box'>
            <form onSubmit={handleFormSubmit} action='/result'>
                <input
                    type="text"
                    id='headline'
                    name='headline'
                    placeholder='5 Ways to Boost Your SEO Rankings in 2024'
                    value={headlineValue}
                    onChange={(e) => setHeadlineValue(e.target.value)}
                    aria-label="Headline"
                />
                <button className='btn' type="submit">{buttonText}</button>
            </form>
        </div>
    );
}

export default HeadlineInputForm;
