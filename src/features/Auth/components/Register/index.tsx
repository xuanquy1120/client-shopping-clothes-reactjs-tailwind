import { register, RegisterPayload } from 'features/Auth/services/authSlice';
import React, { useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import RegisterFrom from '../RegisterFrom';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const handleSubmit = async (data: RegisterPayload) => {
    setLoading(true);
    try {
      const newUser = await dispatch(register(data));
      console.log(newUser);
    } catch (error: any) {
      throw error;
    }
  };
  return (
    <>
      <RegisterFrom  onSubmit={handleSubmit} loading={loading}></RegisterFrom>
    </>
  );
}
