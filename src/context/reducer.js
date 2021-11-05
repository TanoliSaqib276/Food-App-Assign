export let data = {
    
    authUser: null,
    tweets : {}

}

export function reducer(state, action) {
    switch (action.type) {
        case "AUTH_USER": {
            return {
                ...state,
                authUser: action.payload
            }
        }

          case "ADD_TWITT":{
              state.tweets = action.payload
              return{
                  ...state,
                  tweets:action.payload
              }

          }
        default:
            return state;

    }
}