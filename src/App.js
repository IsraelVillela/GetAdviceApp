import './App.css'
import { useState, useEffect } from 'react'

const App = () => {

    const [advice, setAdvice]=useState('')

    const buttonHandler=()=>{
        fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => setAdvice(data.slip.advice))
        
    }

    useEffect(()=>{
        buttonHandler()
    },[])
    

    return ( 
        <div className='app'>
            <div className='card'>
                <h1 className='heading'>{advice}</h1>

                <button className='button' onClick={buttonHandler} >
                    <span>Give Me Advice</span>
                </button>
            </div>
        </div>
     );
}
 
export default App;