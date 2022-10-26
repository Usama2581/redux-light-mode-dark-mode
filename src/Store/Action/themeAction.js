function  lightTheme(theme) {
    return {
        type: 'LIGHT_THEME',
        payload: theme
    }
}

function darkTheme(theme) {
    return {
        type: 'DARK_THEME',
        payload: theme
    }
}

export{
    lightTheme,
    darkTheme
}