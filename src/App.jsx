import React from 'react'
import Test from './components/test/test.jsx'
import { withRouter } from 'react-router-dom'
import './App.css'
function App () {
  return (
    <div className="App">
      <Test />
    </div>
  )
}
export default withRouter(App)
