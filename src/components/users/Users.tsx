import React, { FC, useEffect, useState } from "react";
import { IUserModel } from "../../models/User";
import { getAllUsers } from "../../services/users.api.service";
import User from "../user/User";

const Users: FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        getAllUsers()
            .then(users => {
                setUsers(users);
            })
            .catch(error => {
                console.error("Error fetching users: ", error);
            });
    }, []);

    return (
        <div>
            {users.map(user => (
                <User
                    key={user.id}
                    id={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    maidenName={user.maidenName}
                    age={user.age}
                    gender={user.gender}
                    email={user.email}
                    image={user.image}
                />
            ))}
        </div>
    );
};

export default Users;
