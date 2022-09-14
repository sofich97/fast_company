import React, {useState} from 'react';
import api from "../api";
import {fetchAll} from "../api/fake.api/user.api";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter((user) => user !== userId));
    };


    const renderPhrase = (phrase) => {
        //let phrase;
        if((users.length >= 2 && users.length <= 4) ) {
            phrase = `${users.length} человека тусанут с тобой сегодня`
        } else if((users.length === 1) || (users.length > 4)) {
            phrase = `${users.length} человек тусанет с тобой сегодня`;
        } else if(users.length === 0){
            phrase = `Никто с тобой не тусанет`
        }
        return phrase;
    }
    const getBadgeClasses = () => {
        let classes = 'badge m-3 ';
        classes += users.length === 0 ? 'bg-danger' : 'bg-primary';
        return classes;
    }



    return (
        <>
            <h1 className={getBadgeClasses()}>{renderPhrase()}</h1>
            {users.length !== 0 &&  (
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Имя</th>
                            <th scope='col'>Качества</th>
                            <th scope='col'>Профессия</th>
                            <th scope='col'>Встретиться раз</th>
                            <th scope='col'>Оценка</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>
                                    {user.qualities.map((quality) => (
                                        <span
                                            key={quality._id}
                                            className={`badge bg-${quality.color} m-1`}
                                        >
                                            {quality.name}
                                        </span>
                                    ))}
                                </td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{`${user.rate}/5`}</td>
                                <td>
                                    <button className='btn btn-danger'
                                            onClick={() => handleDelete(user)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Users;