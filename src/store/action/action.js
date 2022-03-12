function add(user) {
    console.log('acttion ---->', user)
    return {
        type: 'ADD_USER',
        payload: user
    }
}
function remove() {
    return {
        type: 'REMOVE_USER'
    }
}
export {
    add,
    remove
}
