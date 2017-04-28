export function themeReducer(state, action) {
    if (!state) return {
        themeColor: '#333',
        testname: 'hazy'
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, themeColor: action.themeColor};
        default:
            return state;
    }
}
