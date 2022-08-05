import React, { useContext, useState, useEffect } from 'react'
import Actions from './actions'
import { ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, useForkRef } from '@mui/material/'


function Todo({todo}) {
   const date = todo.created_date.toDate()
   let color = todo.completed ? 'green' : '#e03442'
   return (
      <React.Fragment>
         <ListItem sx={{width: '99%',borderLeft: '3px solid '+ color , margin: '5px 0', padding: '0 9px', boxShadow : '6px 7px 7px -1px rgba(97,97,97,.1)'}}>
            <ListItemText
               primary={todo.task}
               secondary={date.toString()}
            />
            <Actions todo={todo} status={todo.completed} />
         </ListItem>
      </React.Fragment>
   )
}

export default Todo