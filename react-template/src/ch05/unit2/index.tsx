import React, { useState } from "react";
import { BtnProvider, useBtnContext } from "./context/btnContext"

type Props = {}

const D: React.FC<Props> = () => {
    const data = useBtnContext()
    console.log('D', data.btnVisible)
    return <button>
        D組件
    </button>
}

const C: React.FC<Props> = () => {
    const data = useBtnContext()
    console.log('C', data.btnVisible)
    return <>
        <p>C 組件</p>
        <D />
    </>
}

const B: React.FC<Props> = () => {
    return <>
        <p>B 組件</p>
        <C />
    </>
}

const App: React.FC = () => {
    return
    <BtnProvider>
        <h1>App</h1>
        <B />
    </BtnProvider>
}

export default App