import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import AddStaff from './components/addStaff/AddStaff';
import Homepage from './components/homepage/Homepage';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../src/theme"
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from "./store"
import AppMessage from './components/appMessage/appMessage'
import Table from './components/table/Table';
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppMessage />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoute><Homepage user={user} /></PrivateRoute>} />
            <Route path="/addStaff" element={<AddStaff />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/table/:tableId" element={<Table />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
