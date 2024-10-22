import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name:"theme", 
    initialState:{
        theme:"light"
    }, 
    reducers:{
        changeTheme(state, action){
            state.theme = action.payload;
        }
    }
})

export const { changeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;