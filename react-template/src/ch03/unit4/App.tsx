import React, { useState } from "react";

type BtnProps = {
    currentNum: number
    onClickHandler: () => void
}

//改變變數->觸發渲染
const Btn: React.FC<BtnProps> = ({ currentNum, onClickHandler }) => {
    return (
        < button onClick={onClickHandler} > +1
            < span >
                目前的總數: {currentNum}
            </span >
        </button >)
}

//porps:state
const App: React.FC = () => {
    //陣列解構
    const [num, setNum] = useState(999)

    function onClickCounter() {
        setNum(num + 1)
    }

    return <>
        <Btn currentNum={num} onClickHandler={onClickCounter} />
        <h1>計數器:{num}</h1>
    </>
}
export default App
