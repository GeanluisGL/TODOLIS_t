//rfce: Crea la estructura base del modelo de react.
import React, {useState, useEffect, useRef} from 'react'
 
//useState es un hook que nos permite tomar las variables que vayamos a utilizar
//props = |Propiedades|
function TodoForm(props) {
  
//Aqui la constante usa la variable input en la funcion de "setInput"
const [input, setInput] = useState(props.edit ? props.edit.value : '')


const inputRef = useRef(null)

useEffect(() => {
  inputRef.current.focus()
})

//Constante que guarda la funcion que permite que se agregen valores en a la barra de texto para agregar
const handleChange = e => {
   setInput(e.target.value)
};

//Evita que la pagina se recargue al tocar el boton de agregar
const handleSubmit = e => {
  e.preventDefault()
 
  //Genera un Id entre 0 y 10000 cada vez que se presione el boton
   props.onSubmit({
     //Math.floor es como se "llama" una funcion matematica
     id: Math.floor(Math.random() * 10000),
      text:input 
 });

 //Funcion que guarda la variable de texto
  setInput ('');
}

  return (
        /*Se crea el form dando el nombre de la clase 'todo-form'*/
<form className='todo-form' onSubmit={handleSubmit /*Se le agrega el handleSubmit al boton*/}>
{props.edit ? (
  <>
  <center>

    {/*Se crea el form*/}
  <input type={"text"} 
placeholder='Actualiza la actividad'

// El value se le asigna a la variable de input
value={input} name='text' 

//Aqui se especifica la clase como editar o actualizar
className='todo-input edit'


onChange={handleChange}
ref={inputRef}
/>
<button className='todo-button edit'>Actualizar</button>
</center>
</>
)/*El signo : significa  */ :(
<>
<center>
<input type={"text"} 
placeholder='Agrega una actividad'
value={input} name='text'
className='todo-input'
onChange={handleChange}
ref={inputRef}
/>
<button className='todo-button'>Agregar</button></center>
</>)
}
</form>
  )
}

export default TodoForm
