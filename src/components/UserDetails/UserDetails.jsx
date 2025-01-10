import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const users = useLoaderData();
    const {id, name, username, email, website, phone} = users;
    return (
        <div>
            <h3>User Id No. {id}</h3>
            <h2>{name}</h2>
            <h4>{username}</h4>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Website : <a href='#' >{website}</a></p>
        </div>
    );
};

export default UserDetails;