import { FormControl, Container, TextField, Button} from '@material-ui/core'
import React, {useState} from 'react';

//Adding 
const ToDoForm = ({addTask}) => {
    
    const [text, setTask] = useState("");
    
    const doSubmit = (e) =>{
        e.preventDefault();
        addTask(text);
        setTask("");
    }


    return (
        <Container maxWidth="sm"> 
            <form onSubmit={doSubmit} >
                <FormControl fullWidth={true}>
                    <TextField label="Enter A Task" required={false} value={text}
                     onChange={(e) => setTask(e.target.value)} />
                    <Button variant="contained" color="secondary" 
                    type="submit" style={{marginTop: 10}}
                    > Add 
                    </Button>
                </FormControl>
            </form>
        </Container>
    );
}

export default ToDoForm;