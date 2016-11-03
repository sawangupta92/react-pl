import cookie from 'react-cookie';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'APP_LOAD':
      return Object.assign({}, state, action.data)
    case 'APP_MENU_CLICK':
      return Object.assign({}, state, { currentView: action.key })
    case 'LOG_IN':
      cookie.save("currentUserId", action.res.payload.authentication_token);
      return Object.assign({}, state, { currentUser: action.res.payload })
    case 'LOG_OUT':
      cookie.remove('currentUserId')
      return Object.assign({}, state, { currentUser: null })
    case 'SET_ORDER':
      cookie.save("currentOrderId", action.res.id);
      return Object.assign({}, state, { order: action.res })
    default:
      return state
  }
}

export default reducer
