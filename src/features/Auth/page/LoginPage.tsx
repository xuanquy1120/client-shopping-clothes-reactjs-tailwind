import { unwrapResult } from '@reduxjs/toolkit';
import { login, LoginPayload } from 'features/Auth/services/authSlice';
import { cartActions } from 'features/Cart/services/cartSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from 'redux/hooks';
import { LoginForm } from '../components/LoginForm';
export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = async (data: LoginPayload) => {
    setLoading(true);
    try {
      const result = await dispatch(login(data));
      const { user } = unwrapResult(result);
      dispatch(cartActions.setCartUser(user));
      navigate('/product');
    } catch (error: any) {
      toast(error.message + '!');
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      
      <LoginForm onSubmit={handleSubmit} loading={loading}></LoginForm>
    </>
  );
}
