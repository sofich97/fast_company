import React from 'react';
import User from "./user";
import Qualitie from "./qualitie";

const Users = ({users, ...rest}) => {
    const func = (arr) => {
        return arr.map((el) => el)
    }


    return (
        <>
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
                            {console.log('func',func(user.qualities))}
                            <Qualitie name={User(user.qualities)['name']} color={User(user.qualities).color} _id={User(user.qualities)._id}/>
                            {/*<td>*/}
                            {/*    {user.qualities.map((quality) => (*/}
                            {/*        <span*/}
                            {/*            key={quality._id}*/}
                            {/*            className={`badge bg-${quality.color} m-1`}*/}
                            {/*        >*/}
                            {/*                {quality.name}*/}
                            {/*            </span>*/}
                            {/*    ))}*/}
                            {/*</td>*/}
                            <td>{user.profession.name}</td>
                            <td>{user.completedMeetings}</td>
                            <td>{`${user.rate}/5`}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Users;