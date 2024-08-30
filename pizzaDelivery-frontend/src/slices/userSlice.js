import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        username: null,
        address: null,
        homeNumber: null
    },
    reducers: {
        updateUserId: (state, action) => {
            state.userId = action.payload
        },
        updateUsername: (state, action) => {
            state.username = action.payload
        },
        updateAddress: (state, action) => {
            state.address = action.payload
        },
        updateHomeNumber: (state, action) => {
            state.homeNumber = action.payload
        }
    },
})

export const { updateUsername, updateUserId, updateAddress, updateHomeNumber } = userSlice.actions

export default userSlice.reducer