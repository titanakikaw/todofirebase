import { TextField, Button, Grid } from '@mui/material'
import React, {useRef} from 'react'

function TodoInput({onChange, addTask}) {
  const txtInputTask = useRef("");

  function handleSubmit(){
    addTask();
    txtInputTask.current.children[0].children[0].value = ""
  }

  return (
    <Grid container style={{padding:'0'}}>
      <Grid item xs={12} lg={9}>
        <TextField variant="outlined" style={{width: '100%', padding: '0px!important'}} ref={txtInputTask} size="small" onChange={(e) => onChange(e.target.value)}/>
      </Grid>
      <Grid item xs={12} lg={3} style={{padding: '2px'}}>
        <Button variant="contained" sx={{width: '100%'}} onClick={(e) => handleSubmit()}>Save Task</Button>
      </Grid>
    </Grid>
  )
}

export default TodoInput