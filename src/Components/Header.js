import React, { Component } from 'react'
import connect from '../higherOrderComponents/connect.js'

class Header extends Component {
    render () {
        const styleH1 = {
            color: this.props.themeColor
        }
        return (<h1 style={styleH1}>React.js 小书</h1>)
    }
}

function mapStateToProps(store) {
    return {
        themeColor: store.themeColor,
        testname: store.testname
    }
}

export default connect(mapStateToProps)(Header);
