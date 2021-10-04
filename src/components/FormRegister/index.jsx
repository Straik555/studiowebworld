import React, {useState} from "react";

import emailImage from '../../assets/email.svg';
import nameImage from '../../assets/name.svg';
import passwordImage from '../../assets/password.svg';
import userImage from '../../assets/user.svg';
import facebookImage from '../../assets/facebook.svg';
import googleImage from '../../assets/google.svg';

export const FormRegister = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('qwerty123');
    const [confirm, setConfirm] = useState(true);
    const [agree, setAgree] = useState(false);
    const handleAlert = () => {
        console.log('a', {
            email,
            name,
            password,
            user,
            confirm,
            agree
        })
    }
    return(
        <div className={'form-register'}>
            <div className="top">
                <h2>Регистрация</h2>
                <p>Шаг 1</p>
            </div>
            <label
                htmlFor={'email'}
                className={'label'}
            >
                <img src={emailImage} alt=""/>
                <input
                    id={'email'}
                    type="text"
                    placeholder={'E-mail'}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </label>
            <label
                className={'label'}
                htmlFor='login'
            >
                <img src={nameImage} alt=""/>
                <input
                    id={'login'}
                    type="text"
                    placeholder={'Логин'}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <label
                htmlFor="password"
                className={'label'}
            >
                <img src={passwordImage} alt=""/>
                <input
                    id={'password'}
                    type="password"
                    placeholder={'Пароль'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </label>
            <label
                htmlFor="name"
                className={'label name'}
            >
                Вас пригласил:
                <div>
                    <img src={userImage} alt=""/>
                    <input
                        id={'name'}
                        type="text"
                        placeholder={'Користувач'}
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                </div>
            </label>
            <label
                htmlFor="confirm"
                className={'checkbox'}
            >
                <input
                    id={'confirm'}
                    type="checkbox"
                    value={confirm}
                    onChange={() => setConfirm(!confirm)}
                />
                <p>Я подтверждаю что {user} меня пригласил</p>
            </label>
            <label
                className={'checkbox'}
                htmlFor="agree"
            >
                <input
                    id={'agree'}
                    type="checkbox"
                    value={agree}
                    onChange={() => setAgree(!confirm)}
                />
                <p>Я согласен с Политикой конфиденциальности, условиями использования и подтверждаю, что мне исполнилось 18+</p>
            </label>
            <button
                onClick={handleAlert}
                className={'logIn'}
            >
                Зарегистрироватся
            </button>
            <div className="else">
                <div />
                <p>или</p>
                <div />
            </div>
            <div className="bottom">
                <button className={'google'}>
                    <img src={googleImage} alt="google"/>
                </button>
                <button className={'facebook'}>
                    <img src={facebookImage} alt="facebook"/>
                </button>
            </div>
        </div>
    )
}