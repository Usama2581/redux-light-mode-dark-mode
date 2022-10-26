function themeReducer (state = {}, action){
    switch (action.type) {
        case 'LIGHT_THEME':
            return {
                theme: action.payload
            }
        case 'DARK_THEME': 
        return {
            theme: action.payload
        }
        default: return state
        
    }
}

export default themeReducer
