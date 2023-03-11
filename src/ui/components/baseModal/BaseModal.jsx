import React from 'react';
import PropTypes from 'prop-types';

import './BaseModal.scss';

export const BaseModal = (props) => {
    const { show, handleClose, children } = props;
    const showHideClassName = show
        ? 'modal display-block'
        : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button className='close' onClick={handleClose}>x</button>
            </section>
        </div>
    );
};

BaseModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

BaseModal.defaultProps = {
    show: false,
    handleClose: () => {},
    children: null,
};