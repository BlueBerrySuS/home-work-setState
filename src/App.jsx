import { useState } from 'react'
import './App.css'
import UserForm from './components/user-form/user-form'
import Clicker from './components/clicker/clicker'
import ItemCard from './components/item-card/item-card'

function App() {
  const [data, setData] = useState(null);

  return (
    <>
      <UserForm/>
      <Clicker/>
      <ItemCard id={2}/>
    </>
  )
}

export default App
