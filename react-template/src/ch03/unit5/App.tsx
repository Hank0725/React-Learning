//1. props state
import React, { useState } from "react";

type BtnProps = {}
type BtnState = {}

class Btn extends React.Component<BtnProps, BtnState>  {
    constructor(props: BtnProps) {
        super(props)
    }

    render(): React.ReactNode {
        return <button>+1</button>
    }
}

type Appprops = {}
type Appstate = {}

class App extends React.Component<Appstate, Appprops> {
    constructor(props: Appprops) {
        super(props)
    }

    render(): React.ReactNode {
        return <>
            <h1>Count:0</h1>
            <Btn />
        </>
    }
}


export default App
