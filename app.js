import React from 'react'
import { ReactDOM } from 'react-dom/client'
import HeaderContent from './src/components/title';
const Applayout=()=>{
    return(
        <>
        <HeaderContent/>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.Render(<Applayout/>);