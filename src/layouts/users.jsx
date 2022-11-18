import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage/userPage";
import UsersListPage from "../components/page/userListPage/usersListPage";
import EditPage from "../components/page/editPage/editPage";

const Users = () => {
    const { userId } = useParams();
    const { edit } = useParams();

    return (
        <>
            {
                userId
                    ? edit
                    ? <EditPage userId={userId} />
                    : <UserPage userId={userId} />
                    : <UsersListPage />
            }
        </>
    );
};

export default Users;
