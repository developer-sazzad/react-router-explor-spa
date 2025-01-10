import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title, userId } = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '1px solid #ccc',
        borderRadius : '10px',
        margin: '10px',
        padding: '10px'
    }
    const handleCustomButton = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h3>Posts user : {userId}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <br /><br />
            <button onClick={handleCustomButton}>View Posts Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
    title: PropTypes.object,
}
export default Post;