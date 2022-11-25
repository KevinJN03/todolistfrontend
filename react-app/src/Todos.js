
 function Removetodo(id) {
    fetch(`http://localhost:5001/post/delete/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
.then((res) => {
  console.log(res)
})
 }



function Todos ({Text, id}){
return(
<section className= "text-container">
    <h2>{Text}</h2>
    <h3>{id}</h3>
    {<button onClick={Removetodo}>delete</button>}
    <button>update</button>
</section>

)
}

export default Todos;