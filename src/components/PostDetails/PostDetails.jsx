import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <h4>Post Id is : {id}</h4>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;