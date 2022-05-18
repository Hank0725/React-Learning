import React, { useEffect, useState } from "react";
const App: React.FC = () => {
    let interval: NodeJS.Timeout | null = null
    let num = 0

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        interval = setInterval(() => {
            num++
            console.log(num)
        }, 1000)

        return () => {
            //TODO del
            console.log('pre re-render')
            if (interval !== null) {
                clearInterval(interval)
                num = 0
            }
        }
    }, [counter])

    function ClickHandler() {
        setCounter(counter + 1)
    }
    return <>
        <h1>計時器：{counter}</h1>
        <button onClick={ClickHandler}>+1</button>
    </>
}
export default App