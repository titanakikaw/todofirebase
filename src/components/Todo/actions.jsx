import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {  IconButton } from '@mui/material/'
import { StateContext } from '../../App'

const Actions = ({ todo }) => {
   const { DeleteTask, CompleteTask }  = useContext(StateContext) 
   return (
      <React.Fragment>
         <IconButton edge="end" aria-label="delete" onClick={(e) => CompleteTask(todo.id)}>
            <CheckCircleOutlineIcon  style={{color:'green'}}/>
         </IconButton>
         <IconButton edge="end" aria-label="delete" onClick={(e) => DeleteTask(todo.id)}>
            <DeleteIcon  style={{color:'#e03442'}}/>
         </IconButton>
      </React.Fragment>
   )
}

export default Actions