import React, { useEffect, useState } from "react";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import api from "../../../api";
import { useHistory } from "react-router-dom";

const EditPage = ({ userId }) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        profession: "",
        sex: "",
        qualities: []
    });
    const [professions, setProfessions] = useState([]);
    const [qualities, setQualities] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();

    const transformQualities = (qualities) => {
        return qualities.map((quality) => ({
            label: quality.name,
            value: quality._id
        }));
    };

    useEffect(() => {
        api.users.getById(userId).then(({ profession, qualities, ...data }) => {
            setData((prevState) => ({
                ...prevState,
                ...data,
                profession: profession._id,
                qualities: transformQualities(qualities)
            }));
            setLoading(true);
        });

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
    }, [userId]);

    useEffect(() => {
        if (data._id) {
            setLoading(false);
        }
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };

    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    });
                }
            }
        }
        return qualitiesArray;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { profession, qualities } = data;
        const updateData = {
            ...data,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities)
        };
        api.users.update(userId, updateData).then(() => {
            history.goBack();
        });
    };

    return !isLoading && professions.length ? (
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
            {qualities.length > 0 && (
                <MultiSelectField
                    options={qualities}
                    onChange={handleChange}
                    name="qualities"
                    label="Choose your qualities"
                    defaultValue={data.qualities}
                />
            )}
            <button className="btn btn-primary w-100 mx-auto" type="submit">Обновить</button>
        </form>
    ) : (
        "Loading..."
    );
};

export default EditPage;
