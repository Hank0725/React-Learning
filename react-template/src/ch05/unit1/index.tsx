import React, { useState } from "react";

type Props = {
    btnVisible: boolean
}

const D: React.FC<Props> = ({ btnVisible }) => {
    console.log('btnVisible', { btnVisible })
    return <button>
        D組件
    </button>
}

const C: React.FC<Props> = ({ btnVisible }) => {
    return <>
        <p>C 組件</p>
        <D btnVisible={btnVisible} />
    </>
}

const B: React.FC<Props> = ({ btnVisible }) => {
    return <>
        <p>B 組件</p>
        <C btnVisible={btnVisible} />
    </>
}

const App: React.FC = () => {
    const [btnVisible, setBtnVisible] = useState(false)
    return <>
        <h1>App</h1>
        <B btnVisible={btnVisible} />
    </>
}

export default App