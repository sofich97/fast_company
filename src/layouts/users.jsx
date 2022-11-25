import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage/userPage";
import UsersListPage from "../components/page/userListPage/usersListPage";
import EditPage from "../components/page/editPage/editPage";

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;

    return (
        <>
            {
                userId
                    ? edit
                        ? <EditPage />
                        : <UserPage userId={userId} />
                    : <UsersListPage />
            }
        </>
    );
};

export default Users;
