import React from "react";
import Qualitie from "./qualitie";


const User = (key) => {
    // const name = props.key
    console.log('name', key)
    return (
        <tr>
        {/*    <td>{name}</td>*/}
        {/*    /!*<Qualitie name={User(user.qualities)['name']} color={User(user.qualities).color} _id={User(user.qualities)._id}/>*!/*/}
        {/*    <td>*/}
        {/*        {qualities.map((quality) => (*/}
        {/*            <Qualitie key={quality._id}{...rest}/>*/}
        {/*        ))}*/}
        {/*    </td>*/}
        {/*    <td>{profession.name}</td>*/}
        {/*    <td>{completedMeetings}</td>*/}
        {/*    <td>{`${rate}/5`}</td>*/}
        </tr>
    )
}

export default User;

//
// <tr key={user._id}>
//     <td>{user.name}</td>
//     {console.log('func',func(user.qualities))}
//     <Qualitie name={User(user.qualities)['name']} color={User(user.qualities).color} _id={User(user.qualities)._id}/>
//     {/*<td>*/}
//     {/*    {user.qualities.map((quality) => (*/}
//     {/*        <span*/}
//     {/*            key={quality._id}*/}
//     {/*            className={`badge bg-${quality.color} m-1`}*/}
//     {/*        >*/}
//     {/*                {quality.name}*/}
//     {/*            </span>*/}
//     {/*    ))}*/}
//     {/*</td>*/}
//     <td>{user.profession.name}</td>
//     <td>{user.completedMeetings}</td>
//     <td>{`${user.rate}/5`}</td>
// </tr>