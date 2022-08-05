import { Typography, Divider } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList/TodoList'
import { db } from './services/firebaseconfig'
import {doc as doc_base, addDoc, collection, deleteDoc, onSnapshot, orderBy, serverTimestamp, updateDoc } from 'firebase/firestore'
import './App.css'


export const StateContext = React.createContext();
export const DeleteTask = React.createContext();

const App = () => {
  const [todos, setTodos] = useState(false);
  const [input, setInput] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, 'todos'),orderBy('timestamp', 'desc'), (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({
        id : doc.id,
        task : doc.data().task,
        created_date : doc.data().created_date,
        completed : doc.data().completed
      })))
    })
  
  }, [input])


  const AddTask = async() => {
    if(input != ''){
      await addDoc(collection(db, 'todos'), {
        task : input,
        created_date : new Date(),
        completed : false
      }) 
    }else{
      alert("Please enter a task")
    }
    setInput('')
  }

  const DeleteTask = async (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
    await deleteDoc(doc_base(db,'todos', id))
  }

  const CompleteTask = (id) => {
    updateDoc(doc_base(db, 'todos', id) , {
      completed : true
    })
  }

  const handleChange = (input) => {
    setInput(input)
  }

  return (
    <StateContext.Provider value={{
      todos : todos,
      DeleteTask : DeleteTask,
      CompleteTask : CompleteTask
    }}>
      <Container className='App' style={{marginTop: '3rem',maxWidth: '550px'}}>
        <Typography variant="h5" component="div" style={{margin:'1rem auto'}}>TASK MANAGER WITH FIREBASE</Typography>
        <TodoInput onChange={handleChange} addTask={AddTask}/> 
        <TodoList/>
      </Container>
    </StateContext.Provider>
  )
}

export default App