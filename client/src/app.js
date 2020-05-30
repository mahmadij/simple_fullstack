import React from 'react';
import ReactDom from 'react-dom';
import {Routes} from './components/routes'
import {createStore} from 'redux'
import {incrementCount,decrementCount} from './redux/actiongenerators'
import countReducer from './redux/reducers'
import {Provider } from 'react-redux'
//const store = createStore((state={count:0},action) => {


const store = createStore(countReducer);

console.log(store.getState())

let unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(decrementCount({decrementBy:9}))
unsubscribe();

class App extends React.Component{
    render(){
        return(                        
            <Provider store={store}>
                <Routes/>
            </Provider>
        )
    }
}

ReactDom.render(<App/>,document.getElementById('app'))