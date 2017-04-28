import React, { Component } from 'react'
import connect from '../higherOrderComponents/connect.js'

class ThemeSwitch extends Component {
    render () {
        console.log(this.props)

        const styleH1 = {
            color: this.props.themeColor
        }
        return (
          <div>
            <button style={styleH1} onClick={ () => this.props.changeColor('orange') }>Orange</button>
            <button style={styleH1} onClick={ () => this.props.changeColor('green') }>Blue</button>
          </div>
        )
    }
}

function mapStateToProps(store, props) {
    return {
        themeColor: store.themeColor
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
