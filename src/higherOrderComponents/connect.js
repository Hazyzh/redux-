import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

// connect默认函数参数 默认返回对象
const initFun = () => {}

export default (mapStateToProps=initFun, mapDispatchToProps=initFun) => (WarppedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor () {
            super()
            this.state = {
                allProps: {}
            }
        }

        componentWillMount () {
            const { store } = this.context
            store.subscribe(() => this._updateStore())
            this._updateStore()
        }

        _updateStore () {
            const { store } = this.context
            const state = mapStateToProps(store.getState(), this.props)
            const dispatch = mapDispatchToProps(store.dispatch)

            this.setState( {allProps: {
                ...this.props,

                ...state,
                ...dispatch
            }} )
        }

        render () {
            return (
                <WarppedComponent
                    {...this.state.allProps} />
            )
        }
    }

    return Connect
}
