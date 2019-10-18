import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
// import { composeWithDevTools} from 'redux-devtools-extension'
import inputsReducer from './inputsReducer'

const rootReducer = combineReducers ({
    inputsReducer
})

export default createStore(
    rootReducer,
    applyMiddleware(promiseMiddleware)
)

// THIS IS THE CODE YOU WOULD USE IF YOU WANTED TO ENABLE THE REDUX DEVTOOLS
    // const composeEnhancers = composeWithDevTools({
    //     // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    //    });
    //    const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    //     applyMiddleware(promiseMiddleware),
    //     // other store enhancers if any
    //    ));

    //    export default store

