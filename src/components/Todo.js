import React, {useState} from 'react'
import TodoForm from './TodoForm'
//Cada vez que se vaya a insertar un icono, se debe de importar 
import {RiCloseCircleFill} from 'react-icons/ri'
import {AiFillEdit} from 'react-icons/ai'

  function Todo({todos, completeTodo, removeTodo, updateTodo }) {
const[edit, setEdit] = useState({
  id: null,
  value: ''
})

const submitUpdate = value => {updateTodo(edit.id, value);
  setEdit({
    id: null,
    value: ''
  });
  
}

if (edit.id ) {
  return <TodoForm edit={edit} onSubmit={submitUpdate}/>
}    

  return todos.map((todo, index) =>  (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}
    >

    <div key={todo.id} onClick={() => completeTodo(todo.id)}>
    {todo.text}
    </div>

    {/* CHANGE ICONS */}
    <div className='icons'>
      <RiCloseCircleFill
      onClick={() => removeTodo(todo.id)}
      className='delete-icon'
      />
      <AiFillEdit onClick={() => setEdit({id: todo.id, value:todo.text})}
      className='edit-icon' />
      </div>

    </div>
  ))
}

export default Todo