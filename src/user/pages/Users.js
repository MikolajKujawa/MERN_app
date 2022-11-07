import React from "react";
import UserList from "../components/UserList";

const Users = () => {
    const USERS = [{
        id: 'u1', 
        name: 'Mikołaj Kujawa', 
        image: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
        places: 3
    }]

    return <UserList items={USERS}/>
}

export default Users;