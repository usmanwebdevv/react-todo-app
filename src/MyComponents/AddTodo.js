import { useState } from 'react';


export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit=(e)=>{
       e.preventDefault();
       if(!title || !desc){
        alert("title or desc can not be blank")
       }
       else{
       addTodo(title,desc);
       setTitle("");
       setDesc("");
       }
    }
  return (
    <div className='container'>
        <h3 className='my-3'>Add to Todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="text" className="form-label">Todo Description</label>
    <input type="desc" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Submit</button>
</form>
    </div>
  )
}
