import { configureStore } from '@reduxjs/toolkit';
import matchListReducer from './createSlice/matchList'
import { matchListApiSlice } from './createSlice/matchListApiSlice';


const store = configureStore({
    reducer: {
        match: matchListReducer,
        matchList: matchListApiSlice
    }
})

export default store;