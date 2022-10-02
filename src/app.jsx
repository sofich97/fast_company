import React, { useState, useEffect } from "react";
import api from "./api_new/index";
import Users from "./components/users";

const App = () => {
    // const [users, setUsers] = useState(api.users.fetchAll());
    // console.log("users in App", users);
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users
            .fetchAll()
            .then((user) =>
                setUsers(
                    user
                )
            );
    }, [setUsers]);
    //
    // console.log("users in app", useEffect(() => {
    //     api.users
    //         .fetchAll()
    //         .then((user) =>
    //             setUsers(
    //                 user
    //             )
    //         );
    // }, [])
    // );
    console.log("users in App", users);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) =>
                user._id === id ? { ...user, bookmark: !user.bookmark } : user
            )
        );
    };

    return (
        <>
            <Users
                users={users}
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
            />
        </>
    );
};

export default App;
