import './styles/Error404Page.css'
import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Error404page() {
    return (
        <div className="Error404page">
            <NavBar />
            <div className="page-content">
                <h1>404</h1>
                <p className="error-msg">Page Not Found</p>
                <Link to="/" className="btn">Go To Home</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Error404page;