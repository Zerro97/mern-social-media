import uuid from 'uuid/v4';

export const tokenReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
        return [...state, {
            token: action.token,
            id: uuid()}
        ]
    case 'REMOVE_TOKEN':
        return state.filter(token => token.id !== action.id);
    default: {
        throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
} 