//Importar los archivos a usar
import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

//Funcion que realiza las listas
function TodoList() {
  const [todos, setTodos] = useState([]);

  //Agrega por medio de un todo
const addTodo = todo => {
   
  //Por medio de este 'if' podemos evitar que se inserten filas sin contenido
  if (!todo.text || /^\s*$/.test(todo.text)){
    return;
  }

  const newTodos = [todo,  ...todos]

  setTodos(newTodos)
  }


  //Por medio de este 'if' podemos evitar que cuando se actualicen las filas estas entren sin contenido
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)){
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }

  //Funcion que elimina las filas
  const removeTodo = id => {
    //Tomara el Id y en el filtrara el Id que sea clickeado en la fila
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr);
  }



const completeTodo = id => {
  let updateTodo = todos.map(todo => {
    if (todo.id === id){
    todo.isComplete = !todo.isComplete
  }
return todo
})
setTodos(updateTodo);
}

  return (
    <div>
      <title>To do List</title>
      <h1>¿Qué haremos hoy?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
      </div>
  );
}

export default TodoList