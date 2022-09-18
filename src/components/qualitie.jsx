import React from "react";

const Qualitie = ({color, name, _id}) => {


    return (
        <>
            <td>
                <span
                    key={_id}
                    className={`badge bg-${color} m-1`}
                >
                    {name}
                </span>
            </td>
        </>
    )
}

export default Qualitie;