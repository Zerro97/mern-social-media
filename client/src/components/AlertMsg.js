import React, { useState, Fragment } from 'react';

const AlertMsg = () => {
    // Defining states
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(false);

    if(visible == true){
        return (
            <Fragment>
                <div key="alertBox" className="alert alert-danger">{this.props.message}</div>
            </Fragment>
        )
    } else {
        return null;
    }
}
  
export default AlertMsg;

/*
componentDidUpdate(prevProps) {
    if(this.props.visible != prevProps.visible){
        this.setState({
            visible: this.props.visible
        })
    }
}
*/