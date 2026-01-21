import React, { useState } from 'react';
import LoginPage from './components/auth/LoginPage';
import DashboardPage from './components/auth/DashboardPage';
import LogoutPage from './components/auth/LogoutPage';
import MainDashboard from './pages/MainDashboard';
import { VALID_CREDENTIALS } from './utils/constants';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (userData) => {
    if (
      userData.username === VALID_CREDENTIALS.username &&
      userData.password === VALID_CREDENTIALS.password
    ) {
      setCurrentUser({ name: 'Ashu Khade', username: userData.username });
      setCurrentView('main-dashboard');
      setLoginError('');
    } else {
      setLoginError('Invalid credentials!');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('logout');
    setLoginError('');
  };

  const handleBackToLogin = () => {
    setCurrentView('login');
    setLoginError('');
  };

  if (currentView === 'login') {
    return <LoginPage onLogin={handleLogin} loginError={loginError} />;
  }

  if (currentView === 'dashboard') {
    return <DashboardPage user={currentUser} onLogout={handleLogout} />;
  }

  if (currentView === 'logout') {
    return <LogoutPage onBackToLogin={handleBackToLogin} />;
  }

  if (currentView === 'main-dashboard') {
    return <MainDashboard user={currentUser} onLogout={handleLogout} />;
  }

  return <LoginPage onLogin={handleLogin} loginError={loginError} />;
}

export default App;
