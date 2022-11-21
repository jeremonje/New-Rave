import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './containers/Layout';
import Login from './pages/Login';
import PasswordRecovery from './pages/PasswordRecovery';
import Home from './pages/Home';
import NewPassword from './pages/NewPassword';
import SendEmail from './pages/SendEmail';
import MyAccount from './pages/MyAccount';
import CreateAccount from './pages/CreateAccount';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import NotFound from './pages/NotFound';
import Appcontext from './context/App.context';
import useInitialState from './hooks/useInitialState'


function App() {
  const initialState = useInitialState();
  return (
    <Appcontext.Provider value={initialState}>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/send-email" element={<SendEmail />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
    </BrowserRouter>
    </Appcontext.Provider>
  );
}

export default App;
