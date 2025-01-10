import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();

    const {id, title, body} = post;

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h4>Post Id is : {id}</h4>
            <h5>{title}</h5>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;