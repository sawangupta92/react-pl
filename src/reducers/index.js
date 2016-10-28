const reducer = (state = [], action) => {
  switch (action.type) {
    case 'APP_LOAD':
      return Object.assign({}, state, action.data)
    case 'APP_MENU_CLICK':
      return Object.assign({}, state, { currentView: action.key })
    default:
      return state
  }
}

export default reducer
