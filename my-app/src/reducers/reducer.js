export default (state, action) => {
    switch(action.type) {
        case "SET_TECHNOLOGIES":
        return {
            ...state,
            tech: action.tech
        };
        default:
        return state
    }
}