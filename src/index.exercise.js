import React from 'react'
import ReactDOM from 'react-dom'
import { Logo } from './components/logo'

const App = () => {
  return (
    <div>
      <Logo height={80} width={80}/>
      <h1>Bookshelf</h1>
      <button onClick={() => alert('login was clicked')}>login</button>
      <button onClick={() => alert('register was clicked')}>register</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

