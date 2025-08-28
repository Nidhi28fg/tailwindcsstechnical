import React from 'react'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Count from './component/Count'

function App() {
    return (
    <>
    <Header/>
    <div className='flex w-full'>
    <Sidebar/> 
    <Count />
    </div>
    
    </>
  )
}

export default App
