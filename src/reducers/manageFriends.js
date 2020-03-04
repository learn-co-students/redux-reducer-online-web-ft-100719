export function manageFriends(state = {friends: []}, action){

    switch (action.type){
        case 'ADD_FRIEND':
            return{...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let newFriends = state.friends.map(friend => {
                if (friend.id !== action.id && friend)
                return friend
            })
            return {friends: newFriends.filter(n => n)}
            default:
                return state
    }
}
