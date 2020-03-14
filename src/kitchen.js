import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import store from './store'
import {Provider} from 'react-redux'




class KitchenContainer extends React.Component{
    render(){
        console.log('%c APP RENDER', 'background: green; color: blue;')
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

ReactDOM.render(<KitchenContainer />, document.getElementById('kitchen_main_cnt'))