import { login, LoginPayload } from 'features/Auth/services/authSlice';
import { useAppDispatch } from 'redux/hooks';
import {LoginForm} from '../LoginForm';

import { unwrapResult } from '@reduxjs/toolkit';
import {DangerAlert} from 'components/Alerts/DangerAlert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertLabel, setAlertLabel] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = async (data: LoginPayload) => {
    setLoading(true);
    try {
      const result = await dispatch(login(data));
      unwrapResult(result);
      navigate('/product');
    } catch (error: any) {
      setAlert(true);
      setAlertMessage(error.message);
      setAlertLabel(error.name);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {alert ? <DangerAlert label={alertLabel} message={alertMessage}></DangerAlert> : <></>}
      <LoginForm onSubmit={handleSubmit} loading={loading}></LoginForm>
    </>
  );
}
