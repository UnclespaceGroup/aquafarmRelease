import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { currentForm } from 'reducer'
import logger from 'redux-logger'

const reducers = {
  form: formReducer,
  currentForm
}

const reducer = combineReducers(reducers)

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store
