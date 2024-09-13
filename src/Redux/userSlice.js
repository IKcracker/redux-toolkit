import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { retry } from "@reduxjs/toolkit/query";

const users = []
const usersSlice = createSlice({
    name:'users',
    initialState: users,
    reducers:{
        addUser:(state , action)=>{
            state.push(action.payload)
        },
        deleteUser:(state , action)=>{
          return state.filter((_ , index)=>{
              return  index != action.payload 
            })
    
        }
        ,
        updateUser:(state)=>{
            // state.forEach(state=> console.log(state))
        }
    }
})

export const {addUser , deleteUser , viewUsers, updateUser} = usersSlice.actions

export default usersSlice.reducer























