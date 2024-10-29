import { useEffect, useState } from 'react';
import './App.css';
import NotificationList from './NotificationList';
import { db } from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import NotificationForm from './NotificationForm';

const App = () => {
  const [notifications, setNotifications] = useState([]);

  // Thêm logic lắng nghe realtime của bạn ở đây
  useEffect(() => {
    // Giả sử đây là nơi bạn thiết lập lắng nghe realtime từ Firestore
    onSnapshot(collection(db, "notifications"), (snapshot) => {
      const newData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNotifications(newData);
    });

  }, []);

  return (
    <>
      <NotificationForm />
      <NotificationList notifications={notifications} /></>);
}

export default App;
