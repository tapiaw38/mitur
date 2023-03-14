import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Toast.scss';

const TypeToast = [
    { title: 'success', backgroundColor: '#5cb85c', icon: null },
    { title: 'danger', backgroundColor: '#d9534f', icon: null },
    { title: 'info', backgroundColor: '#5bc0de', icon: null },
    { title: 'warning', backgroundColor: '#f0ad4e', icon: null }
];

export const newToast = (message, typeToast) => {
    let re = TypeToast.find((t) => t.title === typeToast);
    const id = Math.floor(Math.random() * 101 + 1);
    let design = { id: id, description: message };
    let leToast = { ...re, ...design };
    return leToast;
};

const Toast = (props) => {
    const { toastList, position, autoDelete, autoDeleteTime } = props;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList(toastList);
    }, [toastList]);

    useEffect(() => {
        if (autoDelete && toastList.length && list.length) {
            const interval = setInterval(() => {
                setList(list.slice(1));
            }, autoDeleteTime);
            return () => clearInterval(interval);
        }
    }, [autoDelete, autoDeleteTime, list, toastList]);

    const deleteToast = (id) => {
        setList(list.filter((toast) => toast?.id !== id));
    };

    return (
        <div className={`notification-container ${position}`}>
            {list.map((toast) => (
                <div
                    key={toast?.id}
                    className={`notification toast ${position}`}
                    style={{
                        backgroundColor: toast?.backgroundColor
                    }}>
                    <button onClick={() => deleteToast(toast.id)}>
                        X
                    </button>
                    <div className="notification-image">
                        <img src={toast?.icon} alt="" />
                    </div>
                    <div>
                        <p className="notification-title">
                            {toast?.title}
                        </p>
                        <p className="notification-message">
                            {toast?.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

Toast.propTypes = {
    toastList: PropTypes.array.isRequired,
    position: PropTypes.string,
    autoDelete: PropTypes.bool,
    autoDeleteTime: PropTypes.number
};

export default Toast;
