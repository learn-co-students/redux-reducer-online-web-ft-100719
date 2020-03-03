export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE FRIEND':
            return {friends: state.friends.filter(friend => friend.id !== action.id)}
    default: 
        return state;
    }
}
