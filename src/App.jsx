import { useState } from 'react'
import './App.css'
import UserForm from './components/user-form/user-form'
import Clicker from './components/clicker/clicker'

function App() {
  return (
    <>
      <UserForm/>
      <Clicker/>
    </>
  )
}

export default App
