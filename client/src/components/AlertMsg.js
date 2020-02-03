import React, { Component, Fragment } from 'react';

export default class AlertMsg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            visible: false,
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.visible != prevProps.visible){
            this.setState({
                visible: this.props.visible
            })
        }
    }

    render() {
        if(this.state.visible){
            return (
                <Fragment>
                    <div key="alertBox" className="alert alert-danger">{this.props.message}</div>
                </Fragment>
            )
        } else {
            return null;
        }
    }
}