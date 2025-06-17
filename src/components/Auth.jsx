/*
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
    const [userName, SetUserName] = useState("");
    const [password, SetPassword] = useState("");
    const [newAccount, SetNewAccount] = useState(true);

    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if(name === "userName"){
            SetUserName(value);
        }else if(name === "password"){
            SetPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if(newAccount) {
                // Create newAccount
                data = await createUserWithEmailAndPassword(getAuth(), userName, password);
            } else {
                // log in
                data = await signInWithEmailAndPassword(getAuth(), userName, password);
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    }

    return (

    );
}

export default Auth;*/