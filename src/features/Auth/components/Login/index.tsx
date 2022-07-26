import { login, LoginPayload } from 'features/Auth/services/authSlice';
import { useAppDispatch } from 'redux/hooks';
import LoginForm from '../LoginForm';
import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const handleSubmit = async (data: LoginPayload) => {
    setLoading(true);
    try {
      const res = await dispatch(login(data));
      const { user } = unwrapResult(res);
      console.log(user);
    } catch (error: any) {
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
