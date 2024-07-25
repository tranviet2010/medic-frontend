import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPartnerClass, getPartnerSchool } from '../api/partner.api';
import { getParam } from '../api/request';
import { getManageMenu } from '../api/menu.api';
import { getProduct } from '../api/product.api';
import { status } from '../components/core/variable/variable';
import { getAgent } from '../api/custom.api';

// First, create the thunk
export const fetchUserById = createAsyncThunk('users/fetchUserById', async () => {
   
    const getAgents = await getAgent()
    return {
        agent:getAgents?.data?.data
    }
})

const initialState = {
    param: [],
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
