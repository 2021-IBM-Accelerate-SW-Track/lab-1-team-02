import React from 'react';
import ToDo from './ToDo';


const ToDoList = ({ tasks, CheckToDo, deleteToDo}) => { //tasks have been read in 
    return(
        <div>
        {tasks.map((tasks) => ( <ToDo 
        key={tasks.id} 
        taskName={tasks.taskName} 
        CheckToDo={CheckToDo} 
        id={tasks.id}
        isFinished={tasks.isFinished}
        deleteToDo={deleteToDo}
        />
        ))}
        </div>
    );
};

export default ToDoList;
