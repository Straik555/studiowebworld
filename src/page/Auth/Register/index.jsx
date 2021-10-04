import React from "react";
import {Link} from "react-router-dom";
import {FormRegister} from "../../../components/FormRegister";

export const Register = ({handleRegister}) => {
    return (
        <div className={'register-container'}>
            <div className="wrapper">
                <div className="account">
                    <p>Уже есть аккаунт?</p>
                    <Link
                        onClick={handleRegister}
                        to={'/'}
                    >
                        Войдите
                    </Link>
                </div>
            </div>
            <div className="form">
                <div
                    className="close"
                    onClick={handleRegister}
                />
                <FormRegister />
            </div>
        </div>
    )
}