import React, {useState} from "react";
import classnames from 'classnames';
import {Link} from 'react-router-dom'

import { List } from "./list";

export const Menu = () => {
    const [focus, setFocus] = useState(false);
    return (
        <ul className={'menu'}>
            {List && List.map(list => (
                <li
                    className={classnames('list', {['active']: focus})}
                    key={list.name}
                    onMouseEnter={() => setFocus(true)}
                    onMouseLeave={() => setFocus(false)}
                >
                    {list.name}
                    {list.dropDown && (
                        <ul className={'dropDown'}>
                            {list.dropDown.map(item => (
                                <Link
                                    className={'listDropDown'}
                                    key={item.name}
                                    to={list.path}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}