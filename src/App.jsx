import { useState } from 'react'
import Stadium from './Components/Stadium'

function App() {
  const [tab, setTab] = useState("s")

  const renderSwitch = () => {
    switch (tab) {
      case "s":
        return (
          <Stadium />
        )
    
      default:
        return (
          <></>
        )
    }
  }

  return (
    <div className="App">
      <div className='Window'>
        <div className='WindowContent'>
          {renderSwitch()}
        </div>
      </div>
    </div>
  )
}

export default App
