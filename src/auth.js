import cookie from 'react-cookie';
export const requireAuth = (nextState, replace) => {
  if(!cookie.load("currentUserId")){
    replace({
      pathname: '/login',
    })
  }
}

export const alreadyLoggedIn = (nextState, replace) => {
  if(cookie.load("currentUserId")){
    replace({
      pathname: '/',
    })
  }
}
