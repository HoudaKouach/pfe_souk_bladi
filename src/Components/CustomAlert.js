// src/components/CustomAlert.jsx
import React from 'react';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div style={styles.alertBox}>
      <span>{message}</span>
      <button onClick={onClose} style={styles.closeBtn}>×</button>
    </div>
  );
};

const styles = {
    alertBox: {
      position: 'fixed',
      top: '5%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#DEAC80',
      color: 'white',
      padding: '15px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      animation: 'fadeIn 0.3s ease-in-out'
    },
    closeBtn: {
      background: 'transparent',
      border: 'none',
      color: 'white',
      fontSize: '20px',
      cursor: 'pointer'
    }
  };
  

export default CustomAlert;
