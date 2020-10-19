// 过滤待办相关操作
function computeReducer(state = {
  i: 0
}, action) {
  // console.log(" run [computeReducer] reducer");
  // console.log("state:",state);
  switch (action.type) {
    case 'PLUS':
      // alert("+1")
      return {
        ...state, i: state.i + 1
      }
      case 'SUBSTRACT':
        // alert("-1")
        return {
          ...state, i: state.i - 1
        }
        default:
          return state;
  }
}

export default computeReducer;