import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GradientText from "../../src/components/GradientText"
import GradientRectangle from '../../src/components/GradientRectangle'
function App() {
  const [color, setColor] = useState([100,150,70])
  const callbak = ()=>{
    setColor([...color].map( v => Math.random()*255));
    setTimeout(callbak, 1000)
  }
  return (

    <div className="App">
      <GradientText colors={[`rgb(${color.join(",")})`,"#FFF"]} stroke={{width:"4px", colors:['#2e26c3','#b71414'], direction:'90deg'}} >
        我试试
      </GradientText>
      {/* <GradientRectangle radius='20px' colors={['#78d088','#ffc1c164']} width="10px">
        <div style={{
          backgroundColor:'#ffb5b569',
          width:"100px",
          height:"100px"
        }}> 正方形 </div>
      </GradientRectangle> */}
    </div>
    
  )
}

export default App
