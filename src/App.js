import React, {useState} from "react";
import classnames from "classnames";

import {Header} from "./components/Header";
import {Home} from "./page/Home";
import {Register} from "./page/Auth/Register";

export const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleRegister = () => {
        setIsOpen(!isOpen)
    }
  return (
      <div className={classnames('container-app', {['active']: isOpen})}>
          {!isOpen && (
              <>
                  <Header handleRegister={handleRegister} />
                  <Home />
              </>
          )}
          {isOpen && <Register handleRegister={handleRegister} />}
      </div>
  )
}