import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUser , deleteUser , viewUsers } from './Redux/userSlice'

function App() {
  const [userName , setUserName] =useState('')

  const dispatch = useDispatch()

  const users = useSelector((state) => {
    return state
  })


  const handleAdd = (e)=>{
  e.preventDefault()
  dispatch(addUser(userName))

  }
  return (
    <>
        <form onSubmit={handleAdd}>
          <input value={userName} onChange={(e)=> setUserName(e.target.value)}/>
          <button type='submit'>Add</button>
        </form>
        <div>
          {
            users.map((user , index) =>{
              return <p key={index} onClick={()=> dispatch(deleteUser(index))} style={{cursor:'pointer'}}>user:{user}</p>
            })
          }
        </div>
    </>
  )
}

export default App


const add = (num1 , num2)=>{
     return num1 + num2
}

const answer = add(1 , 2)


