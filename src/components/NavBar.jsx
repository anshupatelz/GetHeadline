import Button from "../ui-system/Button";
import './styles/NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className='navbar'>
            <div>
                <p><Link to={'/'} id='logo'>GetHeadline</Link></p>
            </div>
            <div>
                <Button href='/pro' label='Upgrade to PRO' />
            </div>
        </nav>
    );
}

export default NavBar;