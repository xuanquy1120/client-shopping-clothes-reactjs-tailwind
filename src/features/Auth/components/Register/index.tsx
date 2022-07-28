import { unwrapResult } from '@reduxjs/toolkit';
import {DangerAlert} from 'components/Alerts/DangerAlert';
import {InfoAlert} from 'components/Alerts/InfoAlert';
import { register, RegisterPayload } from 'features/Auth/services/authSlice';
import { useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import {RegisterFrom} from '../RegisterFrom';

export function Register() {
  const [loading, setLoading] = useState(false);
  const [dangerAlert, setDangerAlert] = useState(false);
  const [infoAlert, setInfoAlert] = useState(false);
  const [alertLabel, setAlertLabel] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const dispatch = useAppDispatch();
  const handleSubmit = async (data: RegisterPayload) => {
    setLoading(true);
    try {
      const result: any = await dispatch(register(data));
      unwrapResult(result);
      setInfoAlert(true);
      setDangerAlert(false);
      setAlertMessage(result.payload);
      setAlertLabel(result.meta.requestStatus);
    } catch (error: any) {
      setDangerAlert(true);
      setInfoAlert(false);
      setAlertMessage(error.message);
      setAlertLabel(error.name);
      throw error;
    }
  };
  return (
    <>
      {dangerAlert ? <DangerAlert label={alertLabel} message={alertMessage}></DangerAlert> : <></>}
      {infoAlert ? <InfoAlert label={alertLabel} message={alertMessage}></InfoAlert> : <></>}
      <RegisterFrom onSubmit={handleSubmit} loading={loading}></RegisterFrom>
    </>
  );
}
