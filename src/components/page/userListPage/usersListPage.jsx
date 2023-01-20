import React, { useState, useEffect } from "react";
import Pagination from "../../common/pagination";
import paginate from "../../../utils/paginate";
import GroupList from "../../common/groupList";
import api from "../../../api";
import SearchStatus from "../../ui/searchStatus";
import UserTable from "../../ui/userTable";
import _ from "lodash";
import SearchString from "../../ui/searchString";
import PropTypes from "prop-types";
import { useUser } from "../../../hooks/useUsers";

const UsersListPage = () => {
    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const [searchName, setSearchName] = useState("");

    const { users } = useUser();

    const handleDelete = (userId) => {
        console.log(userId);
        // setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        // setUsers(
        //     users.map((user) => {
        //         if (user._id === id) {
        //             user.bookmark = !user.bookmark;
        //             return user;
        //         }
        //         return user;
        //     })
        // );
        const newArray = users.map((user) => {
            if (user._id === id) {
                user.bookmark = !user.bookmark;
                return user;
                // return {...user, bookmark: !user.bookmark };
            }
            return user;
        });
        console.log(newArray);
    };

    useEffect(() => {
        api.professions
            .fetchAll()
            .then((data) =>
                setProfessions(
                    data
                )
            );
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, searchName]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
        setSearchName("");
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const handleChange = ({ target }) => {
        setSearchName(target.value);
        setSelectedProf(undefined);
        setCurrentPage(1);
    };

    if (users) {
        const filteredUsers = searchName
            ? users.filter(
                (user) => {
                    const name = user.name.toLowerCase();
                    const search = searchName.toLowerCase();
                    return name.indexOf(search) !== -1;
                }
            )
            : selectedProf
                ? users.filter(
                    (user) =>
                        JSON.stringify(user.profession) ===
                        JSON.stringify(selectedProf)
                )
                : users;

        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
        const userCrop = paginate(sortedUsers, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf(undefined);
            setSearchName("");
        };

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">

                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            {" "}
                            Очистить
                        </button>
                    </div>
                )}

                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <SearchString onHandleSearch={handleChange} value={searchName}/>
                    {count > 0 && (
                        <UserTable
                            users={userCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return "Loading...";
};

UsersListPage.propTypes = {
    users: PropTypes.array
};

export default UsersListPage;
