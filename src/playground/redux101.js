import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action) => {
    // console.log('store running');

    switch(action.type){
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decreseBy = typeof action.decreseBy === 'number' ? action.decreseBy : 1;
            return {
                count: state.count - decreseBy
            };  
        case 'SET':    
            return{
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };                  
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

console.log(store.getState());

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT',
    decreseBy: 5
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'SET',
    count: 101
});