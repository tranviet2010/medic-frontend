import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAgent, getPartner } from '../api/custom.api';

// First, create the thunk
export const fetchUserById = createAsyncThunk('users/fetchUserById', async () => {
    const emailLocal = localStorage.getItem("email")
   
    const getAgents = await getAgent()
    const getPartners = await getPartner()
    const getIdByEmail = await getPartner({email:emailLocal})
    const getIdByEmailAgent = await getAgent({email:emailLocal})
    return {
        agent:getAgents?.data?.data,
        parent: getPartners?.data?.data,
        getIdEmail: getIdByEmail?.data?.data,
        getIdByEmailAgent:getIdByEmailAgent?.data?.data
    }
})

const initialState = {
    param:[]
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled, (state: any, action) => {
            state.param = action?.payload
        })
    },
})

export default usersSlice.reducer
