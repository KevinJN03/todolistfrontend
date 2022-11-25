
import './App.css';
import {useState, useEffect} from "react"
import Todos from './Todos';


function App() {
  const [error, setError]= useState(null)
const [todo, setTodo] = useState([]);
  const [newtodo, setNewtodo] = useState({
    Text: ""
  });

useEffect(() => {
fetch('http://localhost:5001/post/')
.then(res => res.json())
.then(res => {
  setTodo(res.todo)
}, error => {
  setError(error)
})
}, [])

useEffect(() => {
  if(newtodo.Text !== ""){
fetch("http://localhost:5001/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newtodo)
    })
    .then(res => res.json())
    .then(res => setTodo(res.todo), error => setError(error))
  }
}, [newtodo])
    



function submitclick(){
  setNewtodo({
    Text: document.getElementById("todoinput").value
  })
}

if(error){
  return <div className = "todo">Error {error.message}</div>
}else {
  return(
    <div className= "App">

      <header></header>

      <section className='todoadder'>
    <input type= "text" placeholder="Enter ToDo" id="todoinput"/>
    <button onClick={submitclick}>Add ToDo</button>
      </section>
    
<section className = "todolist-container">
      {todo.map( (post,key) => <Todos Text={post.Text} id ={post.id} key={key} />)}
      </section>

    <footer></footer>
    </div>
    
  )
}
}

export default App;
