import React,{ useState } from 'react';
import { Card, CardContent, Typography, Button, makeStyles, Modal } from '@material-ui/core';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import './Todo.css';
import db from './firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: "center",
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 250,
        left: 500,
        width: 400,
        backgroundColor: ' #a3a3c2',
        border: '2px  solid #000',
        padding: theme.spacing(2,4,3),
    },
}));


function Todo({id,todo,description}) {
    
    const [open, setOpen] = useState(false);
    const [todos, setTodos] = useState('');
    const [descriptions, setDescriptions] = useState('');
    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        db.collection('todos').doc(id).set({
            todo: todos,
            description: descriptions
        },{merge: true})
        setOpen(false);
    }

    return (
        <div className="todo">
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className= {classes.paper}>
                    <h1>EDIT</h1>
                    <input placeholder={todo} value={todos} onChange={event => setTodos(event.target.value)}/>
                    <input placeholder={description} value={descriptions} onChange={event => setDescriptions(event.target.value)}/>
                    <Button onClick={updateTodo}>Update todo</Button>
                </div>
            </Modal>
            <Card className="todo_main">
                <CardContent>
                    <Typography>
                        <div className="todo_card">
                            <h3>{todo}</h3>
                            <div className="todo_des">
                                <p>{description}</p>
                            </div>
                            <div className="todo_icons">
                                <div className="todo_edit">
                                    <EditSharpIcon color="primary"/>
                                    <Button color="primary" onClick={e => setOpen(true)}>Edit</Button>
                                </div>
                                <div className="todo_delete">
                                    <DeleteForeverSharpIcon color="secondary"/>
                                    <Button onClick={event => db.collection('todos').doc(id).delete()} color="secondary">Delete</Button>
                                </div>
                            </div>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Todo
