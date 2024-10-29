import React from 'react';

const NotificationList = ({ notifications = [] }) => {
    if (!notifications.length) {
        return <div>Không có thông báo nào</div>;
    }

    return (
        <div>
            <h2>Danh sách thông báo</h2>
            <div>
                {notifications.map((notification, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ccc',
                            margin: '10px 0',
                            padding: '10px',
                            borderRadius: '4px'
                        }}
                    >
                        <h3 style={{ margin: '0 0 8px 0' }}>{notification.title}</h3>
                        <p style={{ margin: 0 }}>{notification.description}</p>
                        <p>{notification.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationList;