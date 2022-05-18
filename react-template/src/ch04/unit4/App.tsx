import React, { useEffect, useState } from "react";
const App: React.FC = () => {
    //mount 只取得一次資料 重新刷新執行一次
    // useEffect(() => {
    //     console.log('Hello')
    // }, [])

    const [counter, setCounter] = useState(0)
    const [text, setText] = useState('偶數')
    //useEffect去監聽counter的狀態
    useEffect(() => {
        //TODO del
        console.log('counter變化', counter)
        if (counter % 2 === 0) {
            setText('偶數')
        } else {
            setText('奇數')
        }
    }, [counter])


    const handleClick = () => {
        setCounter(counter + 1)
    }
    return <>
        <p>conter:{counter}</p>
        <button onClick={handleClick}>+1</button>
        <p>{text}</p>
    </>
    // return <h1>App</h1>
}
export default App
