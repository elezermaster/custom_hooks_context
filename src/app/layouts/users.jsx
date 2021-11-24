import React from "react";
import { useParams } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import {UsersProvider} from '../hooks/useUsers'

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    return (
        <>
            <UsersProvider>
            {userId ? (
                edit ? (
                    <EditUserPage />
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <UsersListPage />
            )}
            </UsersProvider>
        </>
    );
};

export default Users;
