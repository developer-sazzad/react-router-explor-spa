import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, username, email} = user;
    const userStyle = {
        border: '1px solid #ccc',
        borderRadius : '10px',
        margin: '10px',
        padding: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <h3>{email}</h3>
            <Link to={`/user/${id}`}>
                <button>View User</button>            
            </Link>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object
}

export default User;