const INITIAL_STATE = {
    errlog: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_ERRLOG":
            console.log("errlog reducer :", action.payload)
            return { ...state, errlog: action.payload }
        default:
            return state
    }
}