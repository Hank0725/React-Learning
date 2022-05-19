import React, { useState, useRef, useEffect } from "react";


const App: React.FC = () => {
    const [accountVal, setAccountVal] = useState("")
    const [passwordVal, setPasswordVal] = useState("")

    // const account = document.getElementById('account') as HTMLInputElement
    // const password = document.getElementById('password') as HTMLInputElement

    function login() {
        //TODO Del
        console.log('account.value', accountVal)
        console.log('password.value', passwordVal)
    }

    function onChangHanlder(event: React.FormEvent<HTMLInputElement>) {
        if (event.currentTarget) {
            console.log('event.eventTarget.value', event.currentTarget.value)
            setAccountVal(event.currentTarget.value)
        }
    }

    function onChangPasswordHanlder(event: React.FormEvent<HTMLInputElement>) {
        if (event.currentTarget) {
            console.log('event.eventTarget.value', event.currentTarget.value)
            setPasswordVal(event.currentTarget.value)
        }
    }
    return <>
        <h1>Form</h1>
        <p>帳號</p>
        <input type="text" name="" id="account" value={accountVal} onChange={onChangHanlder} />
        <p>您輸入的帳號：{accountVal}</p>
        <p>密碼</p>
        <input type="text" name="" id="password" value={passwordVal} onChange={onChangPasswordHanlder} />
        <div>
            <button onClick={login}>登入</button>
        </div>
    </>
}

export default App