import React from 'react';
import {Menu} from "../Menu";

export const Header = ({handleRegister}) => {
    return (
        <>
            <div className={'header'}>
                <div className="top" />
                <div className="container">
                    <div className={'wrap'}>
                        <div className="logo">
                            LOGO
                        </div>
                        <div className="call">
                            <p>044 00 05 55</p>
                            <span>контакт-центр</span>
                        </div>
                    </div>
                    <Menu />
                    <div className="buttons">
                        <button className={'login'}>Войти</button>
                        <button
                            className={'register'}
                            onClick={handleRegister}
                        >
                            Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}