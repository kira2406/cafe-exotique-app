import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import AddStaff from './components/addStaff/AddStaff';
import Dashboard from './components/dashboard/Dashboard';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../src/theme"
import { useState } from 'react';
// import PrivateRoute from './components/privateRoute/privateRoute';

function App() {
  const [user, setUser] = useState(null)

  const checkLogin = () => {
    // check login by checking sessionStorage or cookies or validating jwt

    if (user != null) {
      return true
    }
    return false
  }

  function PrivateRoute({ children }) {
    const auth = checkLogin();
    return auth ? children : <Navigate to="/login" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute><Dashboard user={user} /></PrivateRoute>} />
          <Route path="/addStaff" element={<AddStaff />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
