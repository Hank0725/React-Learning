import { useState } from 'react'
import { getDefaultFormatCodeSettings } from 'typescript'

// 1. useState基本用法
// 2. batching update(批量更新)
// 3. 變數在渲染過程的過程的作用範圍

//1.
// const App: React.FC = () => {
//     const [counter, setCounter] = useState(0)

//     function counterHanlder() {
//         setCounter(counter + 1)
//     }

//     return <>
//         <h1>Counter :{counter}</h1>
//         <button onClick={counterHanlder}>+1</button>
//     </>
// }

// export default App

//2.
// const Parent: React.FC = () => {
//     let [count, setCount] = useState(0)
//     return (
//         //冒泡事件
//         <div onClick={() => {
//             setCount(prev => prev + 1)
//         }}> Child click{count}times
//             <Child />
//         </div >
//     )
// }

// const Child: React.FC = () => {
//     let [count, setCount] = useState(0)
//     return (
//         <button onClick={() => {
//             setCount(count + 1)
//         }}>
//             Child click{count}times
//         </button >
//     )
// }

// export default Parent

//3.
const Counter: React.FC = () => {
    let [counter, setCounter] = useState(0)
    //沿用先前的狀態
    function countAll(prev: number) {
        return prev + 1
    }

    const handleClick = () => {
        setCounter(countAll)
        setCounter(countAll)
    }
    return (
        <div className='App'>
            <h1>Component 組件</h1>
            <div>
                counter:{counter}
            </div>
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Counter
