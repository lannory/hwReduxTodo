import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddForm from './AddForm'
import TaskCount from './TaskCount'


function App() {


  return (
    <>
      <AddForm/>
      <TodoList/>
      <TaskCount/>
    </>
  )
}

export default App
