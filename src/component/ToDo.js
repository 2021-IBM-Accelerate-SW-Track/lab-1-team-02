import React from 'react'
import {Card, CardContent, 
Typography, Container, IconButton} from '@material-ui/core'
import {Check, Delete} from '@material-ui/icons'
import EditableLabel from 'react-editable-label';



const ToDo = ({taskName, CheckToDo, id, isFinished, deleteToDo, setText}) => {

    const delToDo = () => deleteToDo(id)
    const markComplete = () => CheckToDo(id)
    const taskStyle = isFinished ?  {textDecoration: "none"} : { textDecoration: "line-through"};
    return(
        <div>
            <Container>
                <Card  variant="outlined" 
                style={{margin: 30, background: "lightblue"}}>
                   <CardContent>
                       <Typography variant="h5" component="h2" style={taskStyle}> 
                           <IconButton onClick={delToDo} style={{float : "right", padding: 5} }> 
                               <Delete style={{color: "red"}} />
                           </IconButton>
                           <Container>
                           <EditableLabel initialValue={taskName} onChange={e => setText(e.target.value)} ></EditableLabel>
                           </Container>
                           <IconButton onClick={markComplete} style={{float: "center",  padding: 5}}>
                                <Check style={{color : "green"}} />       
                           </IconButton>
                       </Typography>
                   </CardContent>
                </Card>
            </Container>
        </div>
    );
};


export default ToDo;


