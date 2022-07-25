import { Product } from "models";
import { APIResponse } from "models/Common";
import axiosClient from "./axiosClient";

export const productsApi ={
    getAll():Promise<APIResponse<Product[]>>{
        const url = "/product"
        return axiosClient.get(url)
    }
}