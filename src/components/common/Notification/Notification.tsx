// Notification.tsx
import React from 'react';

interface NotificationProps {
  message: string;
  type?: 'error' | 'info'; // Extend this as needed
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type = 'info',
}) => {
  // Define a mapping from type to Tailwind CSS classes
  const typeStyles = {
    error: 'text-center text-red-500 my-28',
    info: 'text-center text-blue-500 my-28', // Example style for 'info'
    // Add more types as needed
  };

  // Get the current styles based on the notification type
  const currentStyles = typeStyles[type] || typeStyles.info;

  return (
    <div className={`notification ${currentStyles}`}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
