import testReducer from '@/reducers/test'
import indexData from '@/layout/IndexReducer'
import { combineReducers } from 'redux'

const appReducer = combineReducers({
    indexData,
    testData : testReducer
  });
  
  export default appReducer