
import './App.css';
import {useState, useEffect} from "react"
import Todos from './Todos';

//imort delete button
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
    
//delete Post
const postDelete = (id,e) => {
  e.preventDefault();
  fetch(`http://localhost:5001/post/delete/${id}`, {
      method: 'DELETE'
  })
.then((result)=>{
  result.json().then((resp) =>{
      console.warn(resp)
  })
})
}

function submitclick(){
  setNewtodo({
    Text: document.getElementById("todo-input").value
  })
}

if(error){
  return <div className = "todo">Error {error.message}</div>
}else {
  return(
    <div className= "App">
        <body>

          <div className='app'>

            <header><h1>ToDo App</h1></header>

      <section className='container'>
<section className='todoadder'>
    <input type= "text" placeholder="Enter ToDo" id="todo-input"/>
    <button className= "todo-button" onClick={submitclick}>Add ToDo</button>
      </section>
    
<section className = "todolist-container">
      {todo.map( (post,key) => 
      <Todos Text={post.Text} id ={post.id} key={key} />
      )}
      </section>


      </section>

</div>
        </body>
          

      

    
    </div>
    
  )
}
}

export default App;

