import React, { useState, useEffect } from 'react';
import {Input, Button, InputLabel, FormControl} from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import Todo from './Todo';
import './App.css';

function App() {
    
  const [todos, setTodos] = useState([{todo:'walking',description:'asdajajhda'}]);
  const [todo, setTodo] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo, description: doc.data().description})))
    });
  },[])

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: todo,
      description: description,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos,{todo:todo,description:description}]);
    setTodo('');
    setDescription('');
  };



  return (
    <div className="App">
      <h1><center>Todo Application</center></h1>
      <form>
        <div className="app_input">
          <h3>Title</h3>
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <h3>Description</h3>
          <input type="textbox" value={description} onChange={(e) => setDescription(e.target.value)}/>
          <Button type="submit" disabled={!todo || !description} variant="contained" color="primary" onClick={addTodo}>Add Todo</Button>
        </div>
      </form>
      
      {
        todos.map(({id,todo,description}) => (
          <Todo key={id} id={id} todo={todo} description={description}/>
        ))
      }
      
    </div>
  );
}

export default App;
