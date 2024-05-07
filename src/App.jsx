import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import ResultPage from './pages/ResultPage.jsx';
import Error404Page from './pages/Error404Page.jsx';

function App() {
    let [analysisData, setAnalysisData] = useState({
        "headline": "",
        "score": 0,
        "tokens": [""],
        "structural_analysis": {
            "headline_type": [],
            "character_count": 0,
            "word_count": 0,
            "beginning_words": [],
            "ending_words": []
        },
        "semantic_analysis": {
            "word_balance": {
                "common_words": [],
                "uncommon_words": [],
                "emotional_words": [],
                "power_words": []
            }
        },
        "sentiment_analysis": {
            "score": 0,
            "positive_words": [],
            "negative_words": []
        },
        "readability_analysis": {
            "flesch_kincaid_grade": "",
            "flesch_reading_ease": ""
        }
    });

    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage analysisData={analysisData} setAnalysisData={setAnalysisData} />,
            errorElement: <Error404Page />,
        },
        {
            path: '/result',
            element: <ResultPage analysisData={analysisData} setAnalysisData={setAnalysisData} />,
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';

// import HomePage from './pages/HomePage.jsx';
// import ResultPage from './pages/ResultPage.jsx';
// import Error404Page from './pages/Error404Page.jsx';

// import App from './App.jsx'
// import './index.css'

// // Correctly define HomePageOrResultPage as a functional component
// function HomePageOrResultPage() {
//     const location = useLocation();
//     const params = new URLSearchParams(location.search);
//     const headline = params.get('headline');

//     // Conditionally return the appropriate component
//     return headline ? <ResultPage /> : <HomePage />;
// }

// // Define the router with correct usage of HomePageOrResultPage component
// const router = createBrowserRouter([
//     {
//         path: '/',
//         // Use the component directly as the element
//         element: <HomePageOrResultPage />,
//         errorElement: <Error404Page />,
//     },
// ]);

// // Correctly render the app with RouterProvider
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// );
