import { CartUser } from "features/Cart/services/cartSlice";
import { APIResponse } from "models/Common";
import axiosClient from "./axiosClient";

export const cartUserApi = {
  updateCartUser(data:CartUser):Promise<APIResponse> {
    const url = "/user/updateCartUser";    
    return axiosClient.post(url, data);
  },
  addCartUser(data:CartUser):Promise<APIResponse> {
    const url = "/user/addCartUser";    
    return axiosClient.post(url, data);
  },
  removeProductInCart(data:any):Promise<APIResponse> {
    const url = "/user/"+data;    
    return axiosClient.delete(url);
  },
};