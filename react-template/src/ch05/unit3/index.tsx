import React, { useEffect, useMemo, useState, useCallback } from "react";

type Props = {}

const App: React.FC = () => {

    console.log('Render')

    const [value, setvalue] = useState(false)
    const aa = 1000
    const obj = { name: 'bruce', data: {} }

    //用useMemo記憶物件陣列
    const memoObj = useMemo(() => {
        return obj
    }, [])

    //用function的方式去記憶
    const memoFun1 = useCallback(function () {
        console.log('here')
    }, [])

    //淺比較
    useEffect(() => {
        console.log('useEffect CallBack')
        memoFun1()
    }, [memoFun1])

    return <>
        <h1>App</h1>
        <button onClick={() => { setvalue(!value) }}>重新Render</button>
    </>
}

export default App

// const a = 1000
// const b = 1000
// console.log(a === b)

// const obj1 = {}
// const obj2 = {}
// console.log(obj1 === obj2)

// const func1 = () => { }
// const func2 = () => { }
// console.log(func1 === func2)