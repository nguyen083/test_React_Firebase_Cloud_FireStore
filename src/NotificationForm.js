import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from './firebase';

const NotificationForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const newNotification = {
                title: title.trim(),
                description: description.trim(),
                time: new Date().toISOString()
            };

            // Dữ liệu sẵn sàng để submit vào Firestore
            console.log('Data to submit:', newNotification);
            await addDoc(collection(db, "notifications"), newNotification);
            // Reset form
            setTitle('');
            setDescription('');

        } catch (error) {
            alert('Lỗi: ' + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h2>Tạo thông báo mới</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label
                        htmlFor="title"
                        style={{ display: 'block', marginBottom: '5px' }}
                    >
                        Tiêu đề:
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ccc'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label
                        htmlFor="description"
                        style={{ display: 'block', marginBottom: '5px' }}
                    >
                        Nội dung:
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            minHeight: '100px'
                        }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting || !title.trim() || !description.trim()}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: isSubmitting || !title.trim() || !description.trim()
                            ? '#cccccc'
                            : '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: isSubmitting || !title.trim() || !description.trim()
                            ? 'not-allowed'
                            : 'pointer'
                    }}
                >
                    {isSubmitting ? 'Đang gửi...' : 'Gửi thông báo'}
                </button>
            </form>
        </div>
    );
};

export default NotificationForm;