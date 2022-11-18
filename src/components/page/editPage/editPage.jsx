import React, { useState } from "react";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";

const EditPage = () => {
    const [data] = useState({
        name: "",
        email: "",
        profession: "",
        sex: "",
        qualities: []
    });
    const [professions, setProfessions] = useState();
    const [qualities, setQualities] = useState();
    // const [user, setUser] = useState();
    //
    // useEffect(() => {
    //     api.users.update(userId, data).then((data) => setUser(data));
    // }, []);
    //
    // const handleClick  = () => {
    //     history.push(history.location.pathname);
    // };
    //
    // const handleChange = (target) => {
    //     setData((prevState) => ({
    //         ...prevState,
    //         [target.name]: target.value
    //     }));
    // };
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //
    // }

    return (
        <form className="col-md-6 offset-md-3 p-4">
            <TextField
                label="Имя"
                // onChange={handleChange}
                value={data.name}
                name="name"
            />
            <TextField
                label="Электронная почта"
                // onChange={handleChange}
                name="email"
                value={data.email}
            />
            {/* <SelectField */}
            {/*     defaultOption="Choose..." */}
            {/*    label="Выберите вашу профессию" */}
            {/*    value={data.profession} */}
            {/*    name="profession" */}
            {/*    onChange={handleChange} */}
            {/*    options={professions} */}
            {/* /> */}
            <RadioField
                options={ [
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ] }
                value={data.sex}
                name="sex"
                // onChange={handleChange}
                label="Choose your sex"
            />
            <MultiSelectField
                options={qualities}
                // onChange={handleChange}
                name="qualities"
                label="Choose your qualities"
                defaultValue={data.qualities}
            />
            <button className="btn btn-primary w-100 mx-auto" type="submit">Обновить</button>
        </form>
    );
    // return (
    //     <form className="col-md-6 offset-md-3 p-4">
    //         <div className="form-group">
    //             <label htmlFor="name">Имя</label>
    //             <input
    //                 type="name"
    //                 className="form-control"
    //                 id="name"
    //                 aria-describedby="emailHelp"
    //                 placeholder="Enter your name"
    //             />
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="exampleInputEmail1">Email address</label>
    //             <input
    //                 type="email"
    //                 className="form-control"
    //                 id="exampleInputEmail1"
    //                 aria-describedby="emailHelp"
    //                 placeholder="Enter email"
    //             />
    //         </div>
    //     </form>
    // );
};

export default EditPage;
