const defaultState = {inputValue:''};

export const reducerInput = (state = defaultState, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            // state.inputValue = action.payload
            return {...state, inputValue:action.payload }
        default: 
            return { state }
    }
}
