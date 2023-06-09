
import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [newEmail, setNewEmail] = useState('');

  const [updateUser, { error }] = useMutation(UPDATE_USER);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setNewPasswordConfirm(event.target.value);
  };
  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== newPasswordConfirm) {
      console.error('New password and confirmation do not match!');
      return;
    }

    try {
      if (newUsername) {
        await updateUser({
          variables: { username: newUsername },
        });
      }
      if (newPassword) {
        await updateUser({
          variables: { password: newPassword },
        });
      }
      if (newEmail) {
        await updateUser({
          variables: { email: newEmail },
        });
      }
      setShowSuccessMessage(true);
      
    } catch (error) {
      console.error('Failed to update profile:', error);
    }

    setNewUsername('');
    setNewPassword('');
    setNewPasswordConfirm('');
    setNewEmail('');
  };

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to access your account settings.
        Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Account Settings</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Change Username:</label>
          <input
            type="text"
            value={newUsername}
            onChange={handleUsernameChange}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Change Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={handlePasswordChange}
            style={inputStyle}
            onClick={() => setShowChangePassword(true)}
          />
        </div>
        {showChangePassword && (
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Confirm New Password:</label>
          <input
            type="password"
            value={newPasswordConfirm}
            onChange={handlePasswordConfirmChange}
            style={inputStyle}
          />
          </div>
          )}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Change Email Address:</label>
          <input
            type="email"
            value={newEmail}
            onChange={handleEmailChange}
            style={inputStyle}
          />
        </div>
        <div style={buttonContainerStyle}>
        <button type="submit" style={submitButtonStyle}>
          Save Changes
        </button>
        </div>
        {showSuccessMessage && (
      <div style={successMessageStyle}>
        <p>Your information has been successfully updated.</p>
        <button style={exitButtonStyle} onClick={closeSuccessMessage}>
          <i className="fas fa-times" />
        </button>
      </div>
    )}
      </form>
    </div>
  );
};

export default Profile;

// Inline styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '2rem',
};

const headingStyle = {
  margin: 0,
  fontSize: '2rem',
  marginBottom: '2rem',
  color: '#5E239D', 
};

const formStyle = {
  width: '100%',
  maxWidth: '400px',
};

const inputGroupStyle = {
  marginBottom: '1.5rem',
};

const labelStyle = {
  display: 'block',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  color: '#5E239D', // Purple color
};

const inputStyle = {
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100%',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
};



const submitButtonStyle = {
  padding: '0.75rem 1rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  borderRadius: '4px',
  border: 'none',
  background: '#007bff',
  color: '#fff',
  cursor: 'pointer',
};

const successMessageStyle = {
  backgroundColor: '#5E239D', 
  color: '#fff',
  padding: '1rem',
  borderRadius: '4px',
  marginTop: '1rem',
};

const exitButtonStyle = {
  position: 'absolute',
  top: '0.5rem',
  right: '0.5rem',
  background: 'none',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
};