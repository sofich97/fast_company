import React from "react";

const Qualitie = ({color, name}) => {


    return (
        <>
            <td>
                <span
                    className={`badge bg-${color} m-1`}
                >
                    {name}
                </span>
                {/*<span*/}
                {/*    key={_id}*/}
                {/*    className={`badge bg-${color} m-1`}*/}
                {/*>*/}
                {/*    {name}*/}
                {/*</span>*/}
            </td>

        </>
    )
}

export default Qualitie;