import ReduxThunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import authReducer from './reducers/auth'
import themeReducer from './reducers/theme'

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
})

export default store = createStore(rootReducer, applyMiddleware(ReduxThunk))