let initialState=[
  {id:1,name:'hepiska',email:'hepiska@mail.com',password:'password'},
  {id:2,name:'frantagola',email:'franatagola@mail.com',password:'password'}
]

const userReducer = (state = initialState , action)=>{
  switch (action.type) {
    case 'NEW_USER':{
      let newId = state[state.length - 1].id+1;
      let newUser = {...action.payload, id:newId }
      let newState = [...state, newUser]
      return newState
    }
    case 'DELETE_USER':{
       let id = action.payload
       let newState = state.filter(user => user.id !== id )
       return newState
    }

    default: return state;

  }
}

export default userReducer
