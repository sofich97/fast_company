import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import api from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        license: false
    });
    const [errors, setErrors] = useState({});
    const [professions, setProfessions] = useState();
    const [qualities, setQualities] = useState([]);

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
                Object.keys(data).map((optionName) => ({
                    label: data[optionName].name,
                    value: data[optionName]._id,
                    color: data[optionName].color
                }));
                setQualities(qualities);
            });
    }, []);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "E-mail is required for fill!"
            },
            isEmail: {
                message: "Entered invalid E-mail"
            }
        },
        password: {
            isRequired: {
                message: "Password is required for fill"
            },
            isCapitalSymbol: {
                message: "Password must contain at least one capital letter"
            },
            isContainDigit: {
                message: "Password must contain at least one digital"
            },
            min: {
                message: "Password must be at least 8 characters long",
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: "Be sure to choose your profession"
            }
        },
        license: {
            isRequired: {
                message: "You can't use our service without confirm license agreement"
            }
        }
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
        const isValid = validate();
        if (!isValid) return;
        const { profession, qualities } = data;
        console.log({
            ...data,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities)
        });
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                onChange={handleChange}
                name="email"
                value={data.email}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                onChange={handleChange}
                name="password"
                value={data.password}
                error={errors.password}
            />
            <SelectField
                defaultOption="Choose..."
                label="Выберите вашу профессию"
                value={data.profession}
                name="profession"
                onChange={handleChange}
                error={errors.profession}
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
            <CheckBoxField
                name="license"
                value={data.license}
                onChange={handleChange}
                error={errors.license}
            >
                Confirm <a>license agreement</a>
            </CheckBoxField>
            <button className="btn btn-primary w-100 mx-auto" type="submit" disabled={!isValid}>Submit</button>
        </form>
    );
};

export default RegisterForm;
