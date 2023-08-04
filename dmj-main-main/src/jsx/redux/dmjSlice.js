import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: 'd'
}

const productSlice = createSlice({
    name: "dmj",
    initialState,
    reducers: {
        addSearch: (state, payload) => {
            state.search = payload
        }
    }

});


export const { addSearch } = productSlice.actions

export default productSlice.reducer;