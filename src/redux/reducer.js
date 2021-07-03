import {
  combineReducers
} from 'redux'
import exampleRed from './example/exampleAct'
const Root = combineReducers({
  Example: exampleRed
})

export default Root
