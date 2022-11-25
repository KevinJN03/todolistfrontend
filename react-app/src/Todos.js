import {useState, useEffect} from "react"


/*function postDelete(id) {

    fetch(`http://localhost:5001/post/delete/${id}`, {
        method: 'DELETE'
    })
.then((result)=>{
    result.json().then((resp) =>{
        console.warn(resp)
    })
})
 }*/



function Todos ({Text, id}){
return(
<section className= "text-container">
    <h2>{Text}</h2>
    <h3>{id}</h3>
    <button className = "deletebutton">delete</button>
</section>

)
}

export default Todos;