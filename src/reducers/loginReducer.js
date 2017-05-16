const initialState = {
  loginStatus: false
}

function statusLogin(state,action) {
  let newLogin = {loginStatus: true}
  return newLogin
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': return statusLogin(state,action)
    default: return state
  }
}

export default loginReducer
