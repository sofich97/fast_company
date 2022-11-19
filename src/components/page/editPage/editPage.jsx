import React, { useEffect, useState } from "react";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import api from "../../../api";
import { useHistory } from "react-router-dom";

const EditPage = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        profession: "",
        sex: "",
        qualities: []
    });
    const [professions, setProfessions] = useState([]);
    const [qualities, setQualities] = useState([]);
    const history = useHistory();

    useEffect(() => {
        api.professions
            .fetchAll()
            .then((data) => {
                const professionsList =
                    Object.keys(data).map((professionName) => ({
                        label: data[professionName].name,
                        value: data[professionName]._id
                    }));
                setProfessions(professionsList);
            });
        api.qualities
            .fetchAll()
            .then((data) => {
                const qualitiesList =
                    Object.keys(data).map((optionName) => ({
                        label: data[optionName].name,
                        value: data[optionName]._id,
                        color: data[optionName].color
                    }));
                setQualities(qualitiesList);
            });
    }, []);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    const handleClick = () => {
        history.goBack("/users");
    };

    return (
        <form
            className="col-md-6 offset-md-3 p-4" onSubmit={handleSubmit}>
            <TextField
                label="Имя"
                onChange={handleChange}
                value={data.name}
                name="name"
            />
            <TextField
                label="Электронная почта"
                onChange={handleChange}
                name="email"
                value={data.email}
            />
            <SelectField
                defaultOption="Choose..."
                label="Выберите вашу профессию"
                value={data.profession}
                name="profession"
                onChange={handleChange}
                options={professions}
            />
            <RadioField
                options={ [
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ] }
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Choose your sex"
            />
            <MultiSelectField
                options={qualities}
                onChange={handleChange}
                name="qualities"
                label="Choose your qualities"
                defaultValue={data.qualities}
            />
            <button className="btn btn-primary w-100 mx-auto" type="submit" onClick={ handleClick }>Обновить</button>
        </form>
    );
};

export default EditPage;
