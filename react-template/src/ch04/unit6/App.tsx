import React, { useEffect, useState } from "react";

type Comment = {
    userId: number
    id: number
    name: string
    email: string
    body: string
}

function useFetchAPI() {
    const [postId, setPostId] = useState(1)
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([] as Comment[])
    console.log('postId', postId)

    async function fetchData(id: number) {
        setLoading(true)
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            const resData = await res.json() as Comment[]
            setData(resData)
            console.log('data', resData)
        }
        catch (error) {
            setError(error as Error)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchData(postId)
    }, [postId])

    return [data, loading, error, setPostId] as const
}


const App: React.FC = () => {
    const [data, loading, error, setPostId] = useFetchAPI()

    function clickHandler(id: number) {
        setPostId(id)
    }

    return <>
        <h1>Fetch</h1>
        <button onClick={() => clickHandler(1)}>Id 1 data</button>
        <button onClick={() => clickHandler(2)}>Id 2 data</button>
        {
            error === null ? <p style={{ color: 'green' }}>情報獲取成功</p> : <p style={{ color: 'red' }}> 情報獲取失敗</p >
        }
        {
            loading ? <p>情報讀取中</p> : null
        }
        <p>結果:</p>
        {
            data.length > 0 && data.map(item => {
                return <p key={item.id}> {item.email}</p>

            })
        }
    </>
}
export default App