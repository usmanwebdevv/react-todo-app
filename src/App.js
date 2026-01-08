import './App.css';
import { Header } from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import { Todos } from './MyComponents/Todos';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete =(todo)=>{
    console.log("I am On Delete", todo)

    setTodos(todos.filter((e)=>{
      return e!== todo;
    }))
      localStorage.setItem("todos",JSON.stringify(todos));
    
  };
   
  const addTodo = (title,desc)=>{
    let sno;
    if(todos.length===0){
      sno = 1;
    }
    else
      {
         sno = todos[todos.length-1].sno +1;
      }
    console.log("I am adding this Todo",title,desc)
    const myTodo = {
      sno :sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
    const [todos, setTodos] = useState(initTodo);
     useEffect(()=>{
     localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <>
    <Router>
  <Header heading="My Todos List" searchBar={true} />

  <Routes>
    <Route
      path="/"
      element={
        <>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
        </>
      }
    />
    <Route path="/about" element={<About />} />
  </Routes>

  <Footer />
</Router>
<footer/>

    </>
  );
}

export default App;
