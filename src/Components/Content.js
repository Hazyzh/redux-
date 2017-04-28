import React, { Component } from 'react'
import ThemeSwitch from './ThemeSwitch'
import connect from '../higherOrderComponents/connect.js'

class Content extends Component {
    render () {
        const styleH1 = {
            color: this.props.themeColor
        }
        return (
          <div>
            <p style={styleH1}>React.js 小书内容</p>
            <ThemeSwitch name="hello" />
          </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        themeColor: store.themeColor
    }
}

export default connect(mapStateToProps)(Content);
