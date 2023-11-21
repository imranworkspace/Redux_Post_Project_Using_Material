import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id:1,title:'girl',content:'girl related content'},
    {id:2,title:'boy',content:'boy related content'},
]

const postsSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAddHere(state,action){
            console.warn(action.payload)
            state.push(action.payload)
        }
    }
})

export const myAllPost = (state)=> state.posts
export const {postAddHere} = postsSlice.actions
export default postsSlice.reducer