import React, { Fragment, Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

class Modal extends Component {
    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    render () {
        return (
        <Fragment>
            <Backdrop clicked={this.props.modalClosed} show={this.props.show} />
            <div
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1': '0'
                }}>
                {this.props.children}
            </div>
        </Fragment>
        )
    }
};

export default Modal;