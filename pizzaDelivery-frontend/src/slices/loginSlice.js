import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loginStatus: null,
    },
    reducers: {
        setLoginStatus: (state, action) => {
            state.loginStatus = action.payload
        }
    },
})

export const { setLoginStatus } = loginSlice.actions

export default loginSlice.reducer