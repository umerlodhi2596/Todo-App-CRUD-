import React from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import UpdateTodo from './components/updateTodo'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <TodoForm />
    },
    {
      path: '/users',
      element: <TodoList />
    },
    {
      path: '/update/:id',
      element: <UpdateTodo />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


