import React, { useState } from 'react'
import Todolist from './Todolist'
import Header from './Header'
import Search from './Search'
import './App.css'

const App = () => {

  const [items,setItems] = useState(JSON.parse(localStorage.getItem("todo-list")) || [])

  const [addItem,setAddItem] = useState('')
  const [search,setSearch] = useState('')

  const adding = (task) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id,task, checked: false };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("todo-list", JSON.stringify(updatedItems));
}


const handleCheck = (id)=>{
  // console.log(id)
const listItem = items.map((item)=>(item.id===id) ? ({...item,checked:!item.checked}) : item)
setItems(listItem)
localStorage.setItem("todo-list",JSON.stringify(listItem))
}

const handleDelete = (id) => {
const listItems = items.filter((item)=>(
  item.id!==id 
))
setItems(listItems)
localStorage.setItem("todo-list",JSON.stringify(listItems))

}

const handleAdd = (e) => {
  e.preventDefault()
  if(!addItem) return;
adding(addItem)
 setAddItem('')
}

  return (
  <>
  <div className='container'>
  <Header
  heading = {"TODO LIST"}
  />
  <Search 
  addItem = {addItem}
  setAddItem = {setAddItem}
  search = {search}
  setSearch = {setSearch}
  handleAdd= {handleAdd}
  />
     <Todolist
     items = {items.filter((item)=>
      (item.task.toLowerCase()).includes(search)
     )}
     handleCheck = {handleCheck}
     handleDelete = {handleDelete}
     />   
  </div>
  </>
      
  )
}

export default App