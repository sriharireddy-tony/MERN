import { createSlice } from '@reduxjs/toolkit';


const userAction = createSlice({
    name : 'matchList',
    initialState: {
        matchList: []
    },
    reducers: {
        getReduxMatchList: (state, action) => {
            state.matchList = action.payload.map(match => {
                return match;
            })
        }
    }
})


export const {getReduxMatchList} = userAction.actions;
export default userAction.reducer;