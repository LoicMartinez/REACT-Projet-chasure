import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, Card} from "@mui/material";
import {useCallback, useContext, useEffect, useState} from "react";

import Api from "../../api/api";
import LoginForm from "../../components/login/loginForm";
import PasswordForm from "../../components/login/passwordForm";
import {useNavigate} from "react-router-dom";
import userContext from "../../contexts/userContext";
import User from "../../models/userModel";

const style = {
    card: {
        padding: "50px",
        justifyContent: "center"
    },
    grid: {
    }
}

function LoginPage() {
    const { user, setUser } = useContext(userContext);

    useEffect(() => {
        console.log(user)
    }, [user])

    const navigation = useNavigate();
    const [loginError, setLoginError] = useState(null);
    const [values, setValues] = useState({
        login: "",
        password: "",
        showPassword: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const doHandleSubmit = useCallback(
        (evt) => {
            console.log("callback")
            evt.preventDefault();
            Api.login(values.login, values.password)
                .then(response => {
                        if (!response) {
                            setLoginError(true);
                        } else {
                            setLoginError(false);
                            setUser(new User(JSON.parse(response)))
                            //Api.getCollection().then(response2 => console.log(response2));
                            navigation('/');
                        }
                    }
                )
            ;
        }
        , [values, navigation, user]);

    const showLoginError = useCallback(() => {
        if (!loginError) {
            return false;
        }
        return (<p style={{ color: 'red' }}>Connexion echoué</p>);
    }, [loginError]);

    return(
        <Card sx={style.card}>
            <form onSubmit={doHandleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <LoginForm
                        values={values}
                        onLoginChanged={value => handleChange(value)}
                    />
                    <PasswordForm
                        values={values}
                        setValues={setValues}
                        onPasswordChanged={value => handleChange(value)}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Se connecter
                    </Button>
                </Box>
            </form>
            {showLoginError()}
        </Card>
    )
}

export default LoginPage