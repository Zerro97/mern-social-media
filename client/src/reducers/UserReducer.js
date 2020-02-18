export const UserReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_USER':
          return action.user;
      case 'REMOVE_USER':
          return null;
      default: {
          throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  } 