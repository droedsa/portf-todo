import {combineReducers, createStore} from "redux";
import bordReducer from './reducers/bord'
import categoriesPanel from "./reducers/categoriesPanel";
import prioritySettings from "./reducers/prioritySettings";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    bord:bordReducer,
    categories:categoriesPanel,
    prioritySettings:prioritySettings,
    form:formReducer
})

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;