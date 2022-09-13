import React, {useState} from 'react';
import api from "../api";
import {fetchAll} from "../api/fake.api/user.api";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {

    };
    console.log(users[0].profession.name)
    console.log(users[0].qualities.tedious)

    const renderPhrase = () => {
        return (
            users.length !== 0 &&
            users.map((user, index) => (
                <>
                    <tr>
                        {/*<th key={user[index]['profession']['name']}>{user[index]['profession']['name']}</th>*/}
                        <th key={user._id}>{user.name}</th>
                    </tr>
                    {/*<tr>*/}
                    {/*    <th key={user[index].qualities}>{user.qualities.name}</th>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <th key={user[index].profession}>{user.profession.name}</th>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <th key={user[index].completedMeetings}>{user.completedMeetings}</th>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <th key={user[index].rate}>{user.rate}</th>*/}
                    {/*</tr>*/}

                    {/*<th key={[user]['qualities']}>{[user]['qualities']}</th>*/}
                    {/*<th key={user.profession}>{user.profession}</th>*/}
                    {/*<th key={user.completedMeetings}>{user.completedMeetings}</th>*/}
                    {/*<th key={user.rate}>{user.rate}</th>*/}
                </>

            ))
        );
    };
    // if (users.length !== 0) {
    //     return <th>{renderPhrase()}</th>
    // }



    return (
        <>
            <h1 className='badge bg-primary '>12 человек тусанет с тобой сегодня</h1>
            <table className='table'>
                <thead>
                <tr>
                    <th scope='col'>Имя</th>
                    <th scope='col'>Качества</th>
                    <th scope='col'>Профессия</th>
                    <th scope='col'>Встретиться раз</th>
                    <th scope='col'>Оценка</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    {/*{renderPhrase()}*/}
                    {/*<td key={users}>{setUsers}</td>*/}
                    {/*<td></td>*/}
                    {/*<td></td>*/}
                    {/*<td></td>*/}
                    <td><button className='btn btn-danger'>delete</button></td>
                </tr>
                </tbody>
            </table>
        </>
    )
};

export default Users;