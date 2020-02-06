export const TokenReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
        return action.token;
    case 'REMOVE_TOKEN':
        return null;
    default: {
        throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
} 