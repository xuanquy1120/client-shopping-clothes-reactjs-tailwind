import { AuthState, LoginPayload, RegisterPayload } from "features/Auth/services/authSlice";
import { APIResponse } from "models/Common";
import axiosClient from "./axiosClient";

export const authApi = {
  login(data:LoginPayload):Promise<APIResponse<AuthState>> {
    const url = "/auth/login";    
    return axiosClient.post(url, data);
  },
  register(data:RegisterPayload):Promise<APIResponse> {
    const url = "/auth/register";     
    return axiosClient.post(url, data);
  },
};