export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND" :
            return {...state, friends: [...state.friends, action.friend] }
        case "REMOVE_FRIEND":
            const friendId = action.id;
            return {...state, friends: state.friends.filter(friend  => friend.id !== friendId)}
        default: 
            return state;
    }
}
