import { configureStore } from '@reduxjs/toolkit';
import matchListReducer from './actions/matchList'


const store = configureStore({
    reducer: {
        match: matchListReducer
    }
})

export default store;