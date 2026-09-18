import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {
  const users =[
    {
      img:'https://images.unsplash.com/photo-1789387018539-3d7572f648e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:'Discover new ideas and explore creative possibilities with a fresh perspective. Let your imagination guide every step.', 
      color:'Orange',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1771054244010-ff9c4324a665?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:' Build meaningful experiences that bring people together and create lasting moments worth remembering', 
      color:'red',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1714655439633-2dddeecd0694?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8', 
      intro:'Turn simple thoughts into powerful solutions through thoughtful design, careful planning, and consistent effort.', 
      color:'blue',
  
      tag:'Underbanked'

    },

    {
      img:'https://images.unsplash.com/photo-1636191284490-fff58f369ec6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwZ2lybHxlbnwwfDF8MHx8fDA%3D', 
      intro:'Turn simple thoughts into powerful solutions through thoughtful design, careful planning, and consistent effort.', 
      color:'green',
      tag:'Outstanding'
    }
    
  ]
  return (
   <div >
      <Section1 users ={users}/>
      <Section2/>
      
   </div>
  )
}

export default App
