import React, { Component } from 'react'
import './App.css'
// components
import Header from './Components/Header.js'
import Content from './Components/Content.js'
// redux
import createStore from './redux/createStore.js'
import { themeReducer } from './redux/themeReducer.js'
import Provider from './higherOrderComponents/Provider.js'

const store = createStore(themeReducer)

class App extends Component {
    render() {
        return (
          <Provider store={store}>
              <div className='App'>
                  <Header />
                  <Content />
              </div>
          </Provider>
        );
    }
}

export default App;
