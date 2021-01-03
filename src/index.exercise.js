import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Logo } from './components/logo'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

const App = () => {
  const [modelOpen, setModelOpen] = useState('none')
  return (
    <div>
      <Logo height={80} width={80}/>
      <h1>Bookshelf</h1>
      <button onClick={() => setModelOpen('login')}>login</button>
      <button onClick={() => setModelOpen('register')}>register</button>
      <Dialog aria-label="Login form" isOpen={modelOpen === 'login'} >
        <button onClick={() => setModelOpen('none')}>Close</button>
        <h1>login</h1>
      </Dialog>
      <Dialog aria-label="register form" isOpen={modelOpen === 'register'} >
        <button onClick={() => setModelOpen('none')}>Close</button>
        <h1>login</h1>
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

