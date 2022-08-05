import React, { useContext } from 'react'
import { StateContext } from '../../App'
import Todo from '../Todo/Todo'
import { List } from '@mui/material'
function TodoList() {
    const { todos }  = useContext(StateContext)
    
    return (
        <List
            sx ={{
                overflowY: 'scroll',
                maxHeight: 300,
                marginTop: '1rem'
            }}
        >
        {
            todos ? todos.map((todo, index) => {
                return <Todo key={index} todo={todo}/>
            }) : 'Loading . . . .'
        }
        </List>
    )
}

export default TodoList