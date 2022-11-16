import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsStateType} from "../Types/PostsType";
import axios from "axios";


//Thunks

export const getPosts = createAsyncThunk(
    "getPosts",
    async ()=> {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        return data;
    }
)

const initialState: postsStateType = {
    posts: []
};


const postsReducer = createSlice({
    name: "posts",
    initialState,
    reducers:{

    },
    extraReducers: builder => {
       builder
           .addCase(getPosts.pending, ()=>{
               console.log("Loading");
           })
           .addCase(getPosts.fulfilled, (state, action)=>{
               state.posts = action.payload
           })
           .addCase(getPosts.rejected,(state, {error})=>{
               alert(JSON.stringify(error.message));
           })
    }
});





export default  postsReducer.reducer;