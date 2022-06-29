import { useFormik } from "formik";
import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    width: 400px;
    height:200px;
    flex-direction: column;
`;

function UserForm({ onAdd }) {

    const roles = ['admin', 'user', 'moderator'];

    const [newUser, setNewUser] = useState(null);

    const {values, errors, handleSubmit, handleChange} = useFormik({
        initialValues: {
            username: '',
            roles: []
        },
        onSubmit: (values) => {
            fetch("https://library-monolith-backend.herokuapp.com/users", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            }).then(response => response.json()).then(data => setNewUser(data));
            onAdd();
          return newUser;  
        },
        validate: (values) => {
            const errors = {};
            if (!values.username) {
                errors.username = "Required!";
            }

            if (values.roles.length === 0) {
                errors.roles = "Pick at least one role!";
            }

            return errors;
        }
    });

    return <FormContainer onSubmit={handleSubmit}>
    <label htmlFor="username">Name</label>
    <input type="text" id="username" name="username" value={values.username} onChange={handleChange} />
    {errors.name && <span style={{ color: 'red'}}>This field is required</span>}
    <label htmlFor="roles"/>
          Select roles:
          <select id="roles" value={values.roles} multiple={true} onChange={handleChange}>
            <option value={roles[0]}>{roles[0]}</option>
            <option value={roles[1]}>{roles[1]}</option>
            <option value={roles[2]}>{roles[2]}</option>
          </select>
    <input type="submit" value="Send" />
</FormContainer>

}

export default UserForm;