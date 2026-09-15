import React from 'react'
import Card from "./components/Card.jsx"
const App = () => {
  return (
    <div className='parent'>
      <Card user='Suhail' age = {18} img="https://images.unsplash.com/photo-1788801246801-b44a96958b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"/>
      <Card user='Rohan' age ={12} img="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmx8ZW58MHwwfDB8fHww"/>
      <Card user='Jaffer' age ={12} img="https://images.unsplash.com/photo-1670689432767-ae7a1ce37f4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdpcmx8ZW58MHwwfDB8fHww"/>

      
      
    </div>
  )
}

export default App
