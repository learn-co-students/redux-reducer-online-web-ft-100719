export function manageFriends(state = {friends: []}, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let newState1 = { friends: [...state.friends, action.friend] }
      return newState1
    case 'REMOVE_FRIEND':
      let newState2 = { friends: state.friends.filter(friend => friend.id !== action.id) }
      return newState2
    default:
      return state
  }
}
