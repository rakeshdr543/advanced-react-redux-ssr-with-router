const initialState = {
    count: 0,
};
export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT_COUNT':
            return {
                ...state,
                count:action.payload+1
            };
        case 'DECREMENT_COUNT':
            return {
                ...state,
                count:action.payload-1,
            };
        default:
            return state;
    }
};