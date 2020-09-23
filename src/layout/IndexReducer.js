
const defaultState = {
  collapsed:false,
  headerName:"1234"
}
const IndexReducer = (state = defaultState, action) => {
  console.log(" run [computeReducer] reducer");
  console.log("indexState:",state);
  
  switch (action.type) {
    case 'toggle':
      return {...state,
        collapsed:!state.collapsed
      }
    case 'setState':
        return {...state,
          ...action.payload
        }
    default:
      return state
  }
}

export default IndexReducer;