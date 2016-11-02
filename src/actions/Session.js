export const signUpSubmitActions = (res) => ({
  type: 'LOG_IN',
  res
})

export const logOutSubmitActions = (authentication_token) => ({
  type: 'LOG_OUT',
  authentication_token
})
