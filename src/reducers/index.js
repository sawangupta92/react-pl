const reducer = (state = [], action) => {
  switch (action.type) {
    case 'APP_LOAD':
      return Object.assign({}, state, action.data)
    case 'APP_MENU_CLICK':
      return Object.assign({}, state, { currentView: action.key })
    case 'LOG_IN':
      sessionStorage.setItem("currentUserId", action.res.payload.authentication_token);
      return Object.assign({}, state, { currentUser: action.res.payload })
    case 'LOG_OUT':
      sessionStorage.clear()
      return Object.assign({}, state, { currentUser: null })
    default:
      return state
  }
}

export default reducer
