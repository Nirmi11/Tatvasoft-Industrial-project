import React, { Component } from 'react'
import InputRef from './InputRef'
 class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef();
    }
    render() {
        return (
            <div>
                <InputRef parent={this.componentRef} />
            </div>
        )
    }
}
export default FocusInput
