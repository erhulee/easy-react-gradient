import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GradientText from "../../src/components/GradientText"
function App() {
  const [color, setColor] = useState([100,150,70])
  const callbak = ()=>{
    setColor([...color].map( v => Math.random()*255));
    setTimeout(callbak, 1000)
  }
  useEffect(()=>{
    callbak()
  },[])
  return (
    <div className="App">
      <GradientText content='我是谁' colors={[`rgb(${color.join(",")})`,"#FFF"]} />
    </div>
  )
}

export default App
