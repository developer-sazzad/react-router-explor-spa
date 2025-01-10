import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    
    return (
        <div className="users">
            <h2>User Name :</h2>
            <div className="posts">
                {
                    users.map((user, idx) => <User key={idx} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;