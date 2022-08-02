import { unwrapResult } from '@reduxjs/toolkit';
import { register, RegisterPayload } from 'features/Auth/services/authSlice';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from 'redux/hooks';
import { RegisterFrom } from '../components/RegisterFrom';

export function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const handleSubmit = async (data: RegisterPayload) => {
    setLoading(true);
    try {
      const result: any = await dispatch(register(data));
      unwrapResult(result);
      toast(result.payload + '!');
    } catch (error: any) {
      toast(error.message + '!');
      throw error;
    }
  };
  return (
    <>
      <ToastContainer />
      <RegisterFrom onSubmit={handleSubmit} loading={loading}></RegisterFrom>
    </>
  );
}
