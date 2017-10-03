import { createStore, combineReducers, applyMiddleware, compose} from 'redux';

export const logger = store => next => (action) => {
    console.log('1 dispatching', action);
    const result = next(action);
    return result;
};


const taskReducer = (store = { taskList: []}, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            return { taskList: [action.payload, ...store.taskList] }
        default:
            return store;
    }
};

const postReducer = (store = { postList: []}, action) => {
    switch (action.type) {
        default:
            return store;
    }
};


const reducer = combineReducers({
    tasks: taskReducer,
    posts: postReducer,
});

const initialStore = {};

const middlewares = applyMiddleware(logger);

const store = createStore(reducer, initialStore, compose(middlewares, window.__REDUX_DEVTOOLS_EXTENSION__()));

store.subscribe(
    () => {
        console.log('subscribe 1', store.getState());
    },
);

store.subscribe(
    () => {
        console.log('subscribe 2', store.getState());
    },
);

store.dispatch({
    type: 'CREATE_TASK',
    payload: 'New Task',
});
