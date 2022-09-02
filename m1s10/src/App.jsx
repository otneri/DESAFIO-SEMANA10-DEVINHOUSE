import './App.css'

import {Home} from './components/pages/Home/Home'
import { AppContext } from './contexts/app-context'

function App() {
  

  return (
    <body className="App">
      <AppContext>
        <Home/>
      </AppContext>
    </body>
  )
}

export default App
