import { PaginationPayload, ProductState } from "features/Product/services/productSlice";
import { FilterProduct } from "models";
import { APIResponse } from "models/Common";
import axiosClient from "./axiosClient";

export const productsApi ={
    getAll(data: PaginationPayload):Promise<APIResponse<ProductState>>{
        const url = "/product"
        return axiosClient.get(url,{ params: data })
    },
    findProduct(data: FilterProduct):Promise<APIResponse<ProductState>>{
        const url = "/product/findProduct"
        return axiosClient.get(url,{ params: data })
    }
}