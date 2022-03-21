import React from "react";
import { useState } from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
        
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("cannot create user, email already in use");
            }else {
                console.log("user creation encountered", error);
            }
        }
    };

    return (
        <div>
            <h1>Sign up with email and password</h1>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label= "Name"
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}
                />
                <FormInput
                    label= "email"
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />
                <FormInput
                    label= "password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />
                <FormInput
                    label= "confirmPassword"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}
                />
                
                <button className="button-container" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm; 