import React, {useState, useEffect, useRef} from 'react'
 
function TodoForm(props) {
  
const [input, setInput] = useState(props.edit ? props.edit.value : '')


const inputRef = useRef(null)

useEffect(() => {
  inputRef.current.focus()
})

//For avoid the page recharge everytime I press the button "Agregar"

const handleChange = e => {
   setInput(e.target.value)
};

const handleSubmit = e => {
  e.preventDefault()

   props.onSubmit({
     id: Math.floor(Math.random() * 10000),
      text:input 
 });

  setInput ('');
}

  return (
<form className='todo-form' onSubmit={handleSubmit}>
{props.edit ? (
  <>
  <center>
  <input type={"text"} 
placeholder='Actualiza la actividad'
value={input} name='text' 
className='todo-input edit'
onChange={handleChange}
ref={inputRef}
/>
<button className='todo-button edit'>Actualizar</button>
</center>
</>
):(
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
