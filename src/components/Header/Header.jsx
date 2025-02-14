import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
        </div>
    );
};

export default Header;