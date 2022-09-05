import './App.css'

import {Home} from './components/pages/Home/Home'
import { AppContext } from './contexts/app-context'

function App() {
  

  return (
    <div className="App">
      <AppContext>
        <Home/>
      </AppContext>
    </div>
  )
}

export default App
